import React from "react";
import { Link } from "react-router-dom";

const laptop = require("../assets/laptop.jpg");

const Hero = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <div className="flex flex-col text-black justify-between">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-poppins py-2 text-left border-b-8 border-yellow">
                        Connect and Elevate your Disc Time
                    </h1>
                    <p className="text-2xl font-montserrat text-left text-darkgrey font-normal">
                        The best place to connect and stay in the loop with the
                        goings of the Frisbee Community
                    </p>
                    <div className="flex flex-row gap-10">
                        <button className="bg-orange w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                            <Link to="/register">Join Us</Link>
                        </button>
                        <button className="text-xs font-montserrat text-center text-darkgrey underline">
                            <Link to="/scrimmages">
                                Explore Pickups near you
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="align-">
                    <img
                        className="w-[500px] mx-auto my-4"
                        src={laptop}
                        alt="/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
