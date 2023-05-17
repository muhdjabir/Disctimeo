import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import { useAuthContext } from "../hook/useAuthContext";
import { ProfileObject } from "../TypeSheet";
import { ReportFileInError } from "typescript";

const header = require("../assets/feedheader.png");

// Feed page that displays all existing users in the system
// Future plans to implement a community chatbot/blog/tweet feature
// allowing users to connect with one another
const Feed = () => {
    const [profile, setProfile] = useState<any>();
    const [search, setSearch] = useState<string>("");
    const { user } = useAuthContext();
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
                setProfile(json);
            }
        };
        if (user) {
            fetchProfile();
        }
        console.log(JSON.stringify(profile));
    }, []);

    // Conditional Filter function to be passed into filter
    // that checks whether any of the ProfileObject properties
    // includes any part of the search state
    const searchFilter = (profile: ProfileObject) => {
        if (
            profile.level.toLowerCase().includes(search.toLowerCase()) ||
            profile.name.toLowerCase().includes(search.toLowerCase()) ||
            profile.position.toLowerCase().includes(search.toLowerCase())
        ) {
            return true;
        }
        return false;
    };

    return (
        <div className="text-center font-montserrat justify-center">
            <div className="mx-auto">
                <img className="mx-auto" src={header} alt="" />
                {/* Search function in order to search for a specific group/user */}
                <form className="lg:max-w-[80%] p-4 mx-auto">
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            placeholder="Search for players"
                        />
                    </div>
                </form>
                <div className="text-black body-font font-poppins mx-auto grid lg:grid-cols-3 ">
                    {!profile && (
                        <h1 className="col-span-3">Fetching results</h1>
                    )}
                    {profile &&
                        profile
                            .filter((prof: ProfileObject) => searchFilter(prof))
                            .map((prof: ProfileObject) => (
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
