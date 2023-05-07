import { Link } from "react-router-dom";

const logo = require("../assets/logo.png");

type ScrimObject = {
    _id: string;
    name: string;
    date: Date;
    time: string;
    description: string;
    venue: string;
    members: string[];
    email: string;
};

const ScrimCard = ({ scrim, email }: { scrim: ScrimObject; email: string }) => {
    const currentDate = new Date(scrim.date);
    console.log(currentDate.toDateString());

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
                    <button className="rounded-md border-2 border-lime whitespace-nowrap px-5 mr-3 font-medium font-montserrat">
                        {/* <Link to="/clubs/view" state={scrim}> */}
                        View More {/* </Link> */}
                    </button>
                    {scrim.email === email && (
                        <button className="rounded-md border-2 border-lime whitespace-nowrap px-5 font-medium font-montserrat">
                            {/* <Link to="/clubs/view" state={scrim}> */}
                            Delete {/* </Link> */}
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
