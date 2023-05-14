import { useAuthContext } from "../hook/useAuthContext";
import { useEffect, useState } from "react";
import Selector from "./Selector";

const FormEdit = () => {
    const [profile, setProfile] = useState<any>();
    const { user } = useAuthContext();
    const [name, setName] = useState<string>("");
    const [years, setYears] = useState<string>("");
    const [position, setPosition] = useState<string>("");
    const [level, setLevel] = useState<string>("");
    const [contact, setContact] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const email = user.email;
    const str = `${process.env.REACT_APP_DB_URL}/api/users/` + email;

    const role = ["Handler", "Cutter", "Hybrid"];
    const year = [
        "Less than 3 years of experience",
        "3-5 years of experience",
        "5-10 years of experience",
        "More than 10 years of experience",
    ];
    const levelOptions = ["Casual", "School", "Club", "National"];

    const checkFilled = () => {
        return name && contact && position && years && level;
    };

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
                setName(json.name);
                setYears(json.years);
                setPosition(json.position);
                setLevel(json.level);
                setContact(json.contact);
            }
        };
        if (user) {
            fetchProfile();
        }
        console.log(JSON.stringify(profile));
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const profileDetails = { name, contact, years, position, level };
        const response = await fetch(str, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify(profileDetails),
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setError("");
            setSuccess("Profile Details Successfully Edited");
        }
    };

    return (
        <div>
            {profile && (
                <div className="bg-white flex flex-col justify-center font-montserrat font-normal mt-5">
                    <form
                        className="max-w-[600px] w-full mx-auto bg-grey p-8 px-8 rounded-lg"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col text-gray-400 py-2 text-xl">
                            <label>Display Name</label>
                            <input
                                className="rounded-lg bg-white mt-2 p-2 text-xl focus:bg-white focus:outline-none"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col text-gray-400 py-2 text-xl">
                            <label>Contact Number</label>
                            <input
                                className="rounded-lg bg-white mt-2 p-2 text-xl  focus:bg-white focus:outline-none"
                                type="number"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex flex-col text-gray-400 py-2 text-xl">
                            <label>Position</label>
                            <Selector
                                options={role}
                                comp="Position"
                                updateState={setPosition}
                            />
                            <label>Years of Experience</label>
                            <Selector
                                options={year}
                                comp="years of experience"
                                updateState={setYears}
                            />
                            <label>Commitment Level</label>
                            <Selector
                                options={levelOptions}
                                comp="current competitive level"
                                updateState={setLevel}
                            />
                        </div>
                        <button
                            className={`w-full my-5 py-2 bg-orange shadow-lg   text-black font-semibold rounded-lg 
                        hover:outline hover:outline-orange hover:bg-white `}
                            disabled={checkFilled() ? false : true}
                        >
                            Edit Details
                        </button>
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-xl">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-xl">
                                {success}
                            </div>
                        )}
                    </form>
                </div>
            )}
        </div>
    );
};

export default FormEdit;
