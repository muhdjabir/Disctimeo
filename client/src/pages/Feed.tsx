import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
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
    const str = "/api/users/";

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
        <div className="text-center font-montserrat">
            <h1 className="text-3xl">Community</h1>
            <div className="text-black body-font font-poppins mx-auto grid lg:grid-cols-3">
                {profile &&
                    profile.map((prof: ProfileObject) => (
                        <ProfileCard key={prof.name} profile={prof} />
                    ))}
            </div>
        </div>
    );
};

export default Feed;
