import { useState, useEffect } from "react";
import ClubCard from "../components/ClubCard";
import { ClubProfileObject } from "../TypeSheet";

const header = require("../assets/clubheader.png");

const Clubs = () => {
    const [profile, setProfile] = useState<any>();
    const str = `${process.env.REACT_APP_DB_URL}/api/clubs`;

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
    }, []);

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
