import { useState, useEffect } from "react";
import { useTrialsContext } from "../hook/useTrialsContext";
import { useAuthContext } from "../hook/useAuthContext";
import { AiFillFileAdd } from "react-icons/ai";

const TrialForm = () => {
    const { dispatch } = useTrialsContext();
    const { user } = useAuthContext();
    const email = user.email;
    const members = [email];
    console.log(members);

    const [venue, setVenue] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const [club, setClub] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch("/api/clubs/" + email, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json = await response.json();
            if (response.ok) {
                setClub(json.name);
            }
        };
        if (user) {
            fetchProfile();
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const Trial = {
            club,
            name,
            venue,
            time,
            members: [],
            date,
            description,
            email,
        };

        const response = await fetch("/api/trials", {
            method: "POST",
            body: JSON.stringify(Trial),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setError(null);
            setVenue("");
            setTime("");
            setDate(new Date());
            setDescription("");
            dispatch({ type: "CREATE_TRIAL", payload: json });
        }
    };

    return (
        <div className="items-start justify-center text-left bg-grey shadow-lg m-5 p-5 font-montserrat font-semibold">
            <form
                className="mx-auto grid lg:grid-cols-3"
                onSubmit={handleSubmit}
            >
                <h3 className="lg:col-span-3 text-center">Add a New Trial</h3>
                <div className="m-3 font-medium">
                    <label>Type of Trials:</label>
                    <input
                        className="font-normal"
                        type="text"
                        placeholder="e.g Open Male Trials"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                </div>
                <div className="m-3 font-medium">
                    <label>Venue: </label>
                    <input
                        className="font-normal"
                        type="text"
                        onChange={(e) => setVenue(e.target.value)}
                        value={venue}
                        required
                    />
                </div>

                <div className="m-3 font-medium">
                    <label>Timing:</label>
                    <input
                        className="font-normal"
                        type="text"
                        onChange={(e) => setTime(e.target.value)}
                        value={time}
                        placeholder="e.g 4.30pm - 6.30pm"
                        required
                    />
                </div>

                <div className="m-3 font-medium">
                    <label>Date:</label>
                    <input
                        className="font-normal"
                        type="date"
                        onChange={(e) => setDate(new Date(e.target.value))}
                        required
                    />
                </div>
                <div className="m-3 font-medium lg:col-start-2 lg:col-end-2">
                    <label>Description:</label>
                    <input
                        className="font-normal"
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required
                    />
                </div>

                <div className="lg:col-start-2 lg:col-end-2 mx-auto">
                    <button className="flex text-center rounded-md text-xl border-2 border-lime px-5 py-2 ">
                        <span className="mr-1"> Add</span>
                        <span className="mt-1">
                            <AiFillFileAdd className="mx-auto" />
                        </span>
                    </button>
                </div>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-xl">
                        {error}
                    </div>
                )}
            </form>
        </div>
    );
};

export default TrialForm;
