import { useTrialsContext } from "../hook/useTrialsContext";
import { useAuthContext } from "../hook/useAuthContext";
import { useEffect } from "react";
import TrialCard from "../components/TrialCard";

const work = require("../assets/Work.png");
const header = require("../assets/trialsheader.png");

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
    email: string;
};

const Trials = () => {
    const { trials, dispatch } = useTrialsContext();
    const { user } = useAuthContext();

    const email: string = user ? user.email : "";

    useEffect(() => {
        const fetchTrials = async () => {
            const response = await fetch("/api/trials/");
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_TRIALS", payload: json });
            }
        };

        fetchTrials();
    }, [dispatch]);
    return (
        <div className="flex flex-col text-center font-montserrat justify-center">
            {/* <h1 className="text-3xl mb-5">Trials</h1>{" "} */}
            <div className=" mx-auto">
                <img src={header} alt="" />
            </div>
            {trials &&
                trials.map((prof: TrialObject) => (
                    <TrialCard key={prof._id} trial={prof} email={email} />
                ))}
            {/* <div className=" mx-auto">
                <img src={work} alt="" />
            </div> */}
        </div>
    );
};

export default Trials;
