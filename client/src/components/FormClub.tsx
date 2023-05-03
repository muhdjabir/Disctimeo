import { useState } from "react";
import { useClubSignup } from "../hook/useClubSignup";

const FormClub = () => {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [name, setName] = useState<String>("");
    const [contact, setContact] = useState<String>("");
    const [year, setYear] = useState<String>("");
    const [description, setDescription] = useState<String>("");
    const [venue, setVenue] = useState<String>("");
    const { clubsignup, error, success } = useClubSignup();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        clubsignup(
            email,
            password,
            "Club",
            name,
            contact,
            description,
            year,
            venue
        );
    };

    return (
        <div className="bg-white flex flex-col justify-center font-montserrat font-normal">
            <form
                className="max-w-[600px] w-full mx-auto bg-grey p-8 px-8 rounded-lg"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col text-black py-2 text-xl">
                    <label>Email Address</label>
                    <input
                        className="rounded-lg text-xl bg-white mt-2 p-2  focus:bg-white focus:outline-none"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col text-gray-400 py-2 text-xl">
                    <label>Club Name</label>
                    <input
                        className="rounded-lg bg-white mt-2 p-2 text-xl focus:bg-white focus:outline-none"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col text-gray-400 py-2 text-xl">
                    <label>Contact Number</label>
                    <input
                        className="rounded-lg bg-white mt-2 p-2 text-xl  focus:bg-white focus:outline-none"
                        type="number"
                        onChange={(e) => setContact(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col text-gray-400 py-2 text-xl">
                    <label>Password</label>
                    <input
                        className="rounded-lg bg-white mt-2 p-2 text-xl  focus:bg-white focus:outline-none"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col text-gray-400 py-2 text-xl">
                    <label>Description</label>
                    <input
                        className="rounded-lg bg-white mt-2 p-2 text-xl  focus:bg-white focus:outline-none"
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col text-gray-400 py-2 text-xl">
                    <label>Year Created</label>
                    <input
                        className="rounded-lg bg-white mt-2 p-2 text-xl  focus:bg-white focus:outline-none"
                        type="number"
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col text-gray-400 py-2 text-xl">
                    <label>Training Venue</label>
                    <input
                        className="rounded-lg bg-white mt-2 p-2 text-xl  focus:bg-white focus:outline-none"
                        type="text"
                        onChange={(e) => setVenue(e.target.value)}
                        required
                    />
                </div>
                <button className="w-full my-5 py-2 bg-orange shadow-lg   text-black font-semibold rounded-lg hover:outline hover:outline-orange hover:bg-white">
                    Sign Up
                </button>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-xl">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-xl">
                        {success}
                    </div>
                )}
            </form>
        </div>
    );
};

export default FormClub;
