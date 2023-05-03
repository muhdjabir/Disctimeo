import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import Profile from "../components/Profile";
import { useAuthContext } from "../hook/useAuthContext";

type ProfileObject = {
    name: string;
    contact: number;
    years: string;
    position: string;
    level: string;
    club: string;
};

const Feed = () => {
    const [profile, setProfile] = useState<any>();
    const { user } = useAuthContext();
    const email = user.email;
    const str = "/api/users/" + email;
    console.log(str);

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
        console.log(JSON.stringify(profile));
    }, []);

    return (
        <div className="text-black body-font font-poppins text-center content-center">
            {profile && <Profile profile={profile} />}
            {/* {profile &&
                    profile.map((prof: Profile) => (
                        <ProfileCard key={prof.name} profile={prof} />
                    ))} */}
        </div>
    );
};

export default Feed;
