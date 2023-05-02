import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const signup = async (email, password, role, name, contact, position, years, level) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, role})
        });
        const json = response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            const response2 = await fetch('/api/users/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, contact, years, position, level})
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
            }
            // save user to local storage
        //         localStorage.setItem('user', JSON.stringify(json));

        //         //update the auth context
        //         dispatch({type: 'LOGIN', PAYLOAD: json});
        //         setIsLoading(false);
        // 
        }
    }
    return { signup, isLoading, error};
}