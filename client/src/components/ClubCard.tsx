import { Link } from "react-router-dom";
import { ClubProfileObject } from "../TypeSheet";

const logo = require("../assets/logo.png");

// Card View of ClubProfileObject that displays Club details,
// as per fetched from mongoDB
const ClubCard = ({ profile }: { profile: ClubProfileObject }) => {
    return (
        <div className="items-start justify-center text-left bg-slate shadow-lg m-5 p-5 font-montserrat font-semibold text-lg md:text-2xl">
            <div className="grid mx-auto grid-cols-2">
                <div className="flex">
                    <div className="flex-none">
                        <img src={logo} alt="" />{" "}
                    </div>
                    <div className="flex-auto w-64">
                        <h4>{profile.name}</h4>
                        <h4 className="font-medium">
                            Established in {profile.year}
                        </h4>
                    </div>
                </div>
                <div className="ml-auto">
                    <button className="rounded-xl border-2 border-lime whitespace-nowrap px-5 font-medium font-montserrat">
                        <Link to="/clubs/view" state={profile}>
                            View More{" "}
                        </Link>
                    </button>
                </div>
            </div>
            <div className="font-normal grid mx-auto grid-cols-2">
                <p>Contact Number:{profile.contact}</p>
                <p>Training Venue: {profile.venue}</p>
                <p>{profile.description}</p>
            </div>
        </div>
    );
};

export default ClubCard;
