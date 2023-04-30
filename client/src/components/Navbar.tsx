import { Link } from "react-router-dom";
import React, { useState } from "react";
const logo = require("../assets/logo.png");

const Navbar = () => {
    const [nav, setNav] = useState("");

    return (
        <div className="flex justify-between justify-items-center items-l h-12 text-black flex-row m-10">
            <div className="flex justify-items-center">
                <img src={logo} alt="asd"></img>
                <h1 className="w-full text-3xl font-montserrat">
                    <Link to="/">Disctimeo</Link>
                </h1>
            </div>
            <div className="flex justify-items-center">
                <ul className="flex text-xl font-poppins">
                    <li className="p-4">
                        <Link to="/feed">Feed</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/">Trials</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/">Club</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/">Scrimmages</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/">Tournaments</Link>
                    </li>
                </ul>
            </div>
            <div className="flex justify-between items-l flex-row gap-10">
                <button
                    type="button"
                    className="rounded-xl text-xl bg-grey items-center px-5"
                >
                    Login
                </button>
                <button
                    type="button"
                    className="rounded-xl text-xl bg-lime items-center px-5"
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default Navbar;
