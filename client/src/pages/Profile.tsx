import { useEffect, useState } from "react";
import { useAuthContext } from "../hook/useAuthContext";
import PlayerProfile from "../components/PlayerProfile";
import ClubProfile from "../components/ClubProfile";

// Profile Page that displays current user information
// ClubProfile or PlayerProfile are conditionally rendered
// based on user role
// Can navigate to edit profile page
const ProfilePage = () => {
    const [profile, setProfile] = useState<any>();
    const { user } = useAuthContext();
    const email = user.email;
    const role = user.role;
    const str =
        process.env.REACT_APP_DB_URL +
        (role === "Player" ? "/api/users/" : "/api/clubs/") +
        email;
    console.log(str);

    // Posting a GET request to mongoDB to retrieve user profile
    // and set the profile
    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch(str, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json = await response.json();
            if (response.ok) {
                setProfile(json);
            }
        };
        if (user) {
            fetchProfile();
        }
    }, []);

    return (
        <div className="text-black body-font font-poppins text-center ">
            <h1 className="m-5">Your Profile</h1>
            {role === "Club" && profile && <ClubProfile profile={profile} />}
            {role === "Player" && profile && (
                <PlayerProfile profile={profile} />
            )}
        </div>
    );
};

export default ProfilePage;
