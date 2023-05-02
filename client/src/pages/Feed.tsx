import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";

type Profile = {
    name: string;
    contact: number;
    years: string;
    position: string;
    level: string;
};

const Feed = () => {
    const [profile, setProfile] = useState<any>();

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch("/api/users/");
            const json = await response.json();
            if (response.ok) {
                setProfile(json);
            }
        };
        fetchProfile();
        console.log(JSON.stringify(profile));
    }, []);

    return (
        <div className="text-lime body-font font-poppins text-center content-center">
            <h3> Feed Page </h3>
            <div className="text-black font-poppins text-xl">
                {profile &&
                    profile.map((prof: Profile) => (
                        <ProfileCard key={prof.name} profile={prof} />
                    ))}
            </div>
        </div>
    );
};

export default Feed;
