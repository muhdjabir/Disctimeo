import { Link } from "react-router-dom";

const team = require("../assets/team.jpg");

// Component for landing page to route visitors to club registration page
const ClubPrompt = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <div className="flex flex-col text-black justify-center gap-10">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-poppins py-2 text-left">
                        Register Your Club
                    </h1>
                    <p className="text-2xl font-montserrat text-left text-darkgrey font-normal">
                        Create an official profile on Disctimeo to expedite and
                        display future club events and open trials
                    </p>
                    <div className="flex flex-row gap-10">
                        <button className="text-xl font-montserrat text-center text-green underline">
                            <Link to="/clubregister">Register your club</Link>
                        </button>
                    </div>
                </div>
                <div className="align-">
                    <img
                        className="w-[500px] mx-auto my-4"
                        src={team}
                        alt="/"
                    />
                </div>
            </div>
        </div>
    );
};

export default ClubPrompt;
