import { useAuthContext } from "../hook/useAuthContext";
import { useScrimsContext } from "../hook/useScrimsContext";
import { ScrimObject } from "../TypeSheet";
// import { Link } from "react-router-dom";

const logo = require("../assets/logo.png");

const ScrimCard = ({ scrim, email }: { scrim: ScrimObject; email: string }) => {
    const currentDate = new Date(scrim.date);
    const { dispatch } = useScrimsContext();
    const { user } = useAuthContext();

    const handleDelete = async () => {
        const response = await fetch("/api/scrims/" + scrim._id, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: "DELETE_SCRIM", payload: json });
        }
    };

    const handleJoin = async () => {
        scrim.members.push(user.email);
        console.log(scrim.members);
        const details = { members: scrim.members };
        const response = await fetch("/api/scrims/" + scrim._id, {
            method: "PATCH",
            body: JSON.stringify(details),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        });
        const json = await response.json();
        if (response.ok) {
            const response1 = await fetch("/api/scrims/" + scrim._id, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json2 = await response1.json();
            dispatch({ type: "JOIN_SCRIM", payload: json2 });
        }
    };

    const handleLeave = async () => {
        const newMembers = scrim.members.filter(
            (member) => member !== user.email
        );
        console.log(newMembers);
        const details = { members: newMembers };
        const response = await fetch("/api/scrims/" + scrim._id, {
            method: "PATCH",
            body: JSON.stringify(details),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        });
        const json = await response.json();
        if (response.ok) {
            const response1 = await fetch("/api/scrims/" + scrim._id, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json2 = await response1.json();
            dispatch({ type: "LEAVE_SCRIM", payload: json2 });
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
                        <h4>{scrim.venue}</h4>
                        <h4 className="font-medium">Timing: {scrim.time}</h4>
                    </div>
                </div>
                <div className="ml-auto">
                    <p className="font-medium">
                        Number of participants: {scrim.members.length}
                    </p>
                    {user && (
                        <button className="rounded-md border-2 border-lime whitespace-nowrap px-5 mr-3 font-medium font-montserrat">
                            {/* <Link to="/clubs/view" state={scrim}> */}
                            View More {/* </Link> */}
                        </button>
                    )}

                    {scrim.email === email && (
                        <button
                            className="rounded-md border-2 border-lime whitespace-nowrap px-5 font-medium font-montserrat"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    )}
                    {user &&
                        scrim.email !== email &&
                        !scrim.members.includes(email) && (
                            <button
                                className="rounded-md border-2 border-lime whitespace-nowrap px-5 font-medium font-montserrat"
                                onClick={handleJoin}
                            >
                                Join
                            </button>
                        )}
                    {user &&
                        scrim.email !== email &&
                        scrim.members.includes(email) && (
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
                <p>Organiser: {scrim.email} </p>
                <p>Date: {currentDate.toDateString()}</p>
                <p>{scrim.description}</p>
            </div>
        </div>
    );
};

export default ScrimCard;
