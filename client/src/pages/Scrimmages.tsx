import { useState, useEffect } from "react";
import { useScrimsContext } from "../hook/useScrimsContext";
import { useAuthContext } from "../hook/useAuthContext";
import ScrimCard from "../components/ScrimCard";

const header = require("../assets/scrimheader.png");

type ScrimObject = {
    _id: string;
    name: string;
    date: string;
    time: string;
    description: string;
    venue: string;
    members: string[];
    email: string;
};

const Scrimmages = () => {
    const { scrims, dispatch } = useScrimsContext();
    const { user } = useAuthContext();

    const email: string = user ? user.email : "";

    useEffect(() => {
        const fetchScrims = async () => {
            const response = await fetch("/api/scrims/");
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_SCRIMS", payload: json });
            }
        };

        fetchScrims();
    }, [dispatch]);

    return (
        <div className="flex flex-col text-center font-montserrat justify-center">
            <div className=" mx-auto">
                <img src={header} alt="" />
                <div className="text-black body-font font-poppins mx-auto">
                    {!scrims && (
                        <h1 className="col-span-3">Fetching results</h1>
                    )}
                    {scrims &&
                        scrims.map((prof: ScrimObject) => (
                            <ScrimCard
                                key={prof._id}
                                scrim={prof}
                                email={email}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Scrimmages;
