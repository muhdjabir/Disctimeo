import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthContext } from "../hook/useAuthContext";
import ProfileCard from "./ProfileCard";
import { ClubProfileObject, ProfileObject } from "../TypeSheet";

const logo = require("../assets/rascals.jpg");

const ViewClubProfile = ({ profile }: { profile: ClubProfileObject }) => {
    const { user } = useAuthContext();
    const [prof, setProf] = useState<any>();
    const str = `${process.env.REACT_APP_DB_URL}/api/users/`;

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch(str, {
                headers: { "Content-Type": "application/json" },
            });
            const json = await response.json();
            if (response.ok) {
                setProf(json);
            }
        };
        fetchProfile();
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
                                    {/* <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        An artist of considerable range, Jenna
                                        the name taken by Melbourne-raised,
                                        Brooklyn-based Nick Murphy writes,
                                        performs and records all of his own
                                        music, giving it a warm, intimate feel
                                        with a solid groove structure. An artist
                                        of considerable range.
                                    </p> */}

                                    <h1 className="text-2xl"> Players:</h1>
                                    {profile.members.length === 0 && (
                                        <div className="text-xl font-medium mx-auto text-center">
                                            <h1 className="mt-5">
                                                No Registered Players
                                            </h1>
                                        </div>
                                    )}
                                    <div className="mx-auto grid lg:grid-cols-2">
                                        {prof &&
                                            profile.members &&
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
                                                        feed={true}
                                                    />
                                                ))}
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

export default ViewClubProfile;
