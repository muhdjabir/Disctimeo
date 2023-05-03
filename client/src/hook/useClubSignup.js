import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useClubSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [success, setSuccess] = useState(null);
    const {dispatch} = useAuthContext();

    const clubsignup = async (email, password, role, name, contact, description, year, venue) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, role})
        });
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
            console.log(error);
        }
        if (response.ok) {
            const response2 = await fetch('/api/clubs/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, contact, year, description, venue, email})
            });
            const json2 = response2.json();
            if (!response2.ok) {
                setIsLoading (false);
                setError(json2.error);
            }
            if (response2.ok) {
                // save user to local storage
                localStorage.setItem('user', JSON.stringify(json));

                //update the auth context
                dispatch({type: 'LOGIN', PAYLOAD: json});
                setIsLoading(false);
                setSuccess("Account successfully created");
            }
        }
    }
    return { clubsignup, isLoading, error, success};
}