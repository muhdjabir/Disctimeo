import { useAuthContext } from "../hook/useAuthContext";
import { useEffect, useState } from "react";

// Edit form that handles the update of the Club Profile details in
// MongoDB. Upon submission, sends a PATCH request to mongoDB to update
// the club profile.
const ClubFormEdit = () => {
    const [profile, setProfile] = useState<any>();
    const { user } = useAuthContext();
    const [name, setName] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [venue, setVenue] = useState<string>("");
    const [contact, setContact] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const email = user.email;
    const str = `${process.env.REACT_APP_DB_URL}/api/clubs/` + email;

    const checkFilled = () => {
        return name && contact && description && year && venue;
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
                setYear(json.year);
                setVenue(json.venue);
                setDescription(json.description);
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
        const profileDetails = { name, contact, year, venue, description };
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
            <h1>Edit your Club Information</h1>
            {profile && (
                <div className="bg-white flex flex-col justify-center font-montserrat font-normal mt-5">
                    <form
                        className="max-w-[600px] w-full mx-auto bg-grey p-8 px-8 rounded-lg"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col text-gray-400 py-2 text-xl">
                            <label>Club Name</label>
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
                            <label>Description</label>
                            <input
                                className="rounded-lg bg-white mt-2 p-2 text-xl  focus:bg-white focus:outline-none"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col text-gray-400 py-2 text-xl">
                            <label>Year</label>
                            <input
                                className="rounded-lg bg-white mt-2 p-2 text-xl  focus:bg-white focus:outline-none"
                                type="number"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col text-gray-400 py-2 text-xl">
                            <label>Training Venue</label>
                            <input
                                className="rounded-lg bg-white mt-2 p-2 text-xl  focus:bg-white focus:outline-none"
                                type="text"
                                value={venue}
                                onChange={(e) => setVenue(e.target.value)}
                                required
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

export default ClubFormEdit;
