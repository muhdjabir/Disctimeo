import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import { useAuthContext } from "../hook/useAuthContext";
import { ProfileObject } from "../TypeSheet";

const header = require("../assets/feedheader.png");

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
        <div className="text-center font-montserrat justify-center">
            <div className="mx-auto">
                <img className="mx-auto" src={header} alt="" />
                <div className="text-black body-font font-poppins mx-auto grid lg:grid-cols-3 ">
                    {!profile && (
                        <h1 className="col-span-3">Fetching results</h1>
                    )}
                    {profile &&
                        profile.map((prof: ProfileObject) => (
                            <ProfileCard
                                key={prof.name}
                                profile={prof}
                                feed={true}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Feed;
