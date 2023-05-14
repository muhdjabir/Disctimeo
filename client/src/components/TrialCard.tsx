import { useAuthContext } from "../hook/useAuthContext";
import { useTrialsContext } from "../hook/useTrialsContext";
import { Link } from "react-router-dom";

const logo = require("../assets/logo.png");

type TrialObject = {
    _id: string;
    club: string;
    name: string;
    date: Date;
    time: string;
    description: string;
    venue: string;
    registration: string;
    members: string[];
    information: string;
    email: string;
};

const TrialCard = ({ trial, email }: { trial: TrialObject; email: string }) => {
    const currentDate = new Date(trial.date);
    const { dispatch } = useTrialsContext();
    const { user } = useAuthContext();

    const handleDelete = async () => {
        const response = await fetch("/api/trials/" + trial._id, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: "DELETE_TRIAL", payload: json });
        }
    };

    const handleJoin = async () => {
        trial.members.push(user.email);
        console.log(trial.members);
        const details = { members: trial.members };
        const response = await fetch("/api/trials/" + trial._id, {
            method: "PATCH",
            body: JSON.stringify(details),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        });
        const json = await response.json();
        if (response.ok) {
            const response1 = await fetch("/api/trials/" + trial._id, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json2 = await response1.json();
            dispatch({ type: "JOIN_TRIAL", payload: json2 });
        }
    };

    const handleLeave = async () => {
        const newMembers = trial.members.filter(
            (member) => member !== user.email
        );
        console.log(newMembers);
        const details = { members: newMembers };
        const response = await fetch("/api/trials/" + trial._id, {
            method: "PATCH",
            body: JSON.stringify(details),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        });
        const json = await response.json();
        if (response.ok) {
            const response1 = await fetch("/api/trials/" + trial._id, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json2 = await response1.json();
            dispatch({ type: "LEAVE_TRIAL", payload: json2 });
        }
    };

    return (
        <div className="items-start justify-center text-left bg-slate shadow-lg m-5 p-5 font-montserrat font-semibold">
            <div className="grid mx-auto grid-cols-2">
                <div className="flex">
                    <div className="flex-none">
                        <img src={logo} alt="" />{" "}
                    </div>
                    <div className="flex-auto w-64">
                        <h4>
                            {trial.club} {trial.name}
                        </h4>
                        <h4 className="font-medium">Timing: {trial.time}</h4>
                        <h4 className="font-medium">Venue: {trial.venue}</h4>
                    </div>
                </div>
                <div className="ml-auto">
                    <p className="font-medium">
                        Number of participants: {trial.members.length}
                    </p>
                    {user.email === trial.email && (
                        <button className="rounded-md border-2 border-lime whitespace-nowrap px-5 mr-3 font-medium font-montserrat">
                            <Link to="/trials/view">View More </Link>
                        </button>
                    )}

                    {trial.email === email && (
                        <button
                            className="rounded-md border-2 border-lime whitespace-nowrap px-5 font-medium font-montserrat"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    )}
                    {user &&
                        user.role === "Player" &&
                        trial.email !== email &&
                        !trial.members.includes(email) && (
                            <button
                                className="rounded-md border-2 border-lime whitespace-nowrap px-5 font-medium font-montserrat"
                                onClick={handleJoin}
                            >
                                Join
                            </button>
                        )}
                    {user.role === "Player" &&
                        trial.email !== email &&
                        trial.members.includes(email) && (
                            <button
                                className="rounded-md border-2 border-lime whitespace-nowrap px-5 font-medium font-montserrat"
                                onClick={handleLeave}
                            >
                                Leave
                            </button>
                        )}
                </div>
            </div>
            <div className="font-normal grid mx-auto grid-cols-2">
                <p>Organiser: {trial.email} </p>
                <p>Date: {currentDate.toDateString()}</p>
                <p>{trial.description}</p>
            </div>
        </div>
    );
};

export default TrialCard;
