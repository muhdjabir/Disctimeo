import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthContext } from "../hook/useAuthContext";
import ProfileCard from "./ProfileCard";
import { ClubProfileObject, ProfileObject } from "../TypeSheet";

const logo = require("../assets/rascals.jpg");

// Personal View of the Club Profile page that is generated after
// fetching data from mongoDB, also generates a card view of players
// that are in the club.
// ##FUTURE might implement an interface for clubs to add new players
const ClubProfile = ({ profile }: { profile: ClubProfileObject }) => {
    const { user } = useAuthContext();
    const [prof, setProf] = useState<any>();
    const str = `${process.env.REACT_APP_DB_URL}/api/users/`;

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch(str, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json = await response.json();
            if (response.ok) {
                setProf(json);
            }
        };
        if (user) {
            fetchProfile();
        }
        console.log(JSON.stringify(profile));
    }, []);

    return (
        <div className="font-montserrat rounded-2xl max-w-[80%] mx-auto bg-gradient-to-r bg-no-repeat bg-[length:100%_25%] from-yellow to-lime">
            <div className="w-full lg:w-3/5 px-4 mx-auto p-5">
                <div className=" flex flex-col min-w-0 break-words bg-slate w-full mb-6 shadow-2xl rounded-2xl mt-16">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 flex justify-center">
                                <div className="m-5">
                                    <img
                                        className="object-contain h-48 w-96"
                                        src={logo}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <button className="bg-lime font-medium p-2 rounded-lg mb-10">
                                <Link to="/profile/edit">
                                    Edit your profile
                                </Link>
                            </button>
                        </div>
                        <div className="text-center mt-12">
                            <h3 className="text-2xl font-bold leading-normal mb-2 ">
                                {profile.name} || {profile.contact}
                            </h3>
                            {profile.members && (
                                <div className="text-sm leading-normal mt-0 mb-2  font-medium uppercase"></div>
                            )}
                            <div className="mb-2 font-medium mt-10">
                                Established in {profile.year} ||
                                {profile.description}
                            </div>
                            <div className="mb-2 font-medium">
                                Training Venue: {profile.venue}
                            </div>
                        </div>
                        <div className="mt-10 py-10  text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4">
                                    {/* Fetches all the players in database then displays those
                                    Who are members of the club */}
                                    <h1 className="text-2xl "> Players:</h1>
                                    <div className="mx-auto grid lg:grid-cols-2">
                                        {prof &&
                                            prof
                                                .filter((pro: ProfileObject) =>
                                                    profile.members.includes(
                                                        pro.email
                                                    )
                                                )
                                                .map((pro: ProfileObject) => (
                                                    <ProfileCard
                                                        key={pro.name}
                                                        profile={pro}
                                                        feed={false}
                                                    />
                                                ))}{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubProfile;
