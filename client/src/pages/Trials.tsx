import { useTrialsContext } from "../hook/useTrialsContext";
import { useAuthContext } from "../hook/useAuthContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import TrialCard from "../components/TrialCard";
import TrialForm from "../components/TrialForm";
import { TrialObject } from "../TypeSheet";

const header = require("../assets/trialsheader.png");

// Trials page that displays the list view of trials that clubs have listed
// List View generated by mapping data to TrialCard component
const Trials = () => {
    const { trials, dispatch } = useTrialsContext();
    const { user } = useAuthContext();

    // Fetches all existing trials from mongoDB
    // Dispatches the context to quick update the list of trials
    useEffect(() => {
        const fetchTrials = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_DB_URL}/api/trials/`
            );
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_TRIALS", payload: json });
            }
        };

        fetchTrials();
    }, [dispatch]);
    return (
        <div className="flex flex-col text-center font-montserrat justify-center">
            <div className=" mx-auto">
                <img src={header} alt="" />
                {/* Logged In Club User is able to gain access to Trial From and create
                new trials */}
                {user && user.role === "Club" && <TrialForm />}
                {/* Visitors can click on this div to be routed to login page
                 to join or create trials */}
                {!user && (
                    <div className="items-start justify-center text-center bg-grey shadow-lg m-5 p-5 font-montserrat font-semibold">
                        <Link to="/login">
                            <p>Log in to a Club Profile to add a new trial</p>
                            <p>
                                Log in or register to indicate your interest in
                                a trial
                            </p>
                        </Link>
                    </div>
                )}
                {/* Listview for Trials generated by passing in TrialObject property
                into TrialCard */}
                {!trials && <h1 className="col-span-3">Fetching results</h1>}
                <div className="text-black body-font font-poppins mx-auto">
                    {trials &&
                        trials.map((prof: TrialObject) => (
                            <TrialCard key={prof._id} trial={prof} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Trials;
