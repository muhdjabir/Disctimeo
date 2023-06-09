import { useEffect } from "react";
import { useScrimsContext } from "../hook/useScrimsContext";
import { useAuthContext } from "../hook/useAuthContext";
import { Link } from "react-router-dom";
import ScrimCard from "../components/ScrimCard";
import ScrimForm from "../components/ScrimForm";
import { ScrimObject } from "../TypeSheet";

const header = require("../assets/scrimheader.png");

// Pickup page that displays the list view of pickups that any user has listed
// List View generated by mapping ScrimObject data to ScrimCard component
const Scrimmages = () => {
    const { scrims, dispatch } = useScrimsContext();
    const { user } = useAuthContext();

    const email: string = user ? user.email : "";

    // Fetches all existing pickups from mongoDB
    // Dispatches the context to quick update the list of pickups
    useEffect(() => {
        const fetchScrims = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_DB_URL}/api/scrims/`
            );
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_SCRIMS", payload: json });
            }
        };

        fetchScrims();
    }, [dispatch]);

    return (
        <div className="flex flex-col text-center font-montserrat justify-center ">
            <div className=" mx-auto">
                <img src={header} alt="" />
                <div className="text-black body-font font-poppins mx-auto">
                    {/* ScrimForm to create new scrims is only rendered when user is logged in 
                    Else, user can click on div to be routed to user authentication page */}
                    {user && <ScrimForm />}
                    {!user && (
                        <div className="items-start justify-center text-center bg-grey shadow-lg m-5 p-5 font-montserrat font-semibold">
                            <Link to="/login">
                                Log in or Register to add or join a pickup
                                session
                            </Link>
                        </div>
                    )}
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
