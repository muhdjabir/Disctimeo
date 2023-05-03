import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useAuthContext } from "../hook/useAuthContext";
import { useLogout } from "../hook/useLogout";

const logo = require("../assets/logo.png");

const Navbar = () => {
    const [nav, setNav] = useState<boolean>(false);
    const { user } = useAuthContext();
    const { logout } = useLogout();

    const handleClick = () => {
        logout();
    };

    document.body.style.setProperty("background-color", "#F0F0F0");

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex justify-between justify-items-center items-l h-12 text-black flex-row m-10 font-medium">
            <img src={logo} alt="asd"></img>
            <h1 className="w-full text-3xl font-montserrat">
                <Link to="/">Disctimeo</Link>
            </h1>
            <div className="hidden md:flex">
                <ul className="text-xl font-poppins hidden md:flex">
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
            {!user && (
                <div className="justify-between items-l flex-row gap-10 hidden md:flex bg-white ">
                    <button
                        type="button"
                        className="rounded-xl text-xl bg-grey items-center px-5 "
                    >
                        <Link to="/login">Login</Link>
                    </button>
                    <button
                        type="button"
                        className="rounded-xl text-xl bg-lime items-center px-5 "
                    >
                        <Link to="/register">Register</Link>
                    </button>
                </div>
            )}
            {user && (
                <div>
                    <span>{user.email}</span>
                    <button
                        type="button"
                        className="rounded-xl text-xl bg-lime items-center px-5 "
                        onClick={handleClick}
                    >
                        <Link to="/">Logout</Link>
                    </button>
                </div>
            )}
            <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>
            <ul
                className={
                    nav
                        ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-grey ease-in-out duration-500"
                        : "ease-in-out duration-500 fixed left-[-100%] font-poppins "
                }
            >
                <div className="flex">
                    <img src={logo} alt="asd"></img>
                    <h1 className="w-full text-3xl font-montserrat m-4">
                        Disctimeo
                    </h1>
                </div>
                {!user && (
                    <div>
                        <li className="p-4 text-2xl">
                            <Link to="/">Login</Link>
                        </li>
                        <li className="p-4 text-2xl">
                            <Link to="/register">Register</Link>
                        </li>{" "}
                    </div>
                )}
                <li className="p-4 text-2xl">
                    <Link to="/feed">Feed</Link>
                </li>
                <li className="p-4 text-2xl">
                    <Link to="/">Trials</Link>
                </li>
                <li className="p-4 text-2xl">
                    <Link to="/">Club</Link>
                </li>
                <li className="p-4 text-2xl">
                    <Link to="/">Scrimmages</Link>
                </li>
                <li className="p-4 text-2xl">
                    <Link to="/">Tournaments</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
