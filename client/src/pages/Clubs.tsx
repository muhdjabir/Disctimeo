import { useState, useEffect } from "react";
import ClubCard from "../components/ClubCard";

const header = require("../assets/clubheader.png");

type ClubProfileObject = {
    name: string;
    contact: number;
    year: string;
    description: string;
    venue: string;
    members: string[];
    email: string;
};

const Clubs = () => {
    const [profile, setProfile] = useState<any>();
    const str = "/api/clubs";

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch(str, {
                headers: { "Content-Type": "application/json" },
            });
            const json = await response.json();
            if (response.ok) {
                setProfile(json);
            }
        };
        fetchProfile();
        console.log(JSON.stringify(profile));
    }, [profile]);

    return (
        <div className="flex flex-col text-center font-montserrat justify-center">
            <div className=" mx-auto">
                <img src={header} alt="" />
                <div className="text-black body-font font-poppins mx-auto">
                    {!profile && (
                        <h1 className="col-span-3">Fetching results</h1>
                    )}
                    {profile &&
                        profile.map((prof: ClubProfileObject) => (
                            <ClubCard key={prof.name} profile={prof} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Clubs;
