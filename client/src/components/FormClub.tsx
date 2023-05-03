import { useState } from "react";

const FormClub = () => {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [name, setName] = useState<String>("");
    const [year, setYear] = useState<String>("");
    const [description, setDescription] = useState<String>("");
    const [venue, setVenue] = useState<String>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, name, password, "Club", description, year, venue);
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
                    />
                </div>
                <div className="flex flex-col text-gray-400 py-2 text-xl">
                    <label>Club Name</label>
                    <input
                        className="rounded-lg bg-white mt-2 p-2 text-xl focus:bg-white focus:outline-none"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col text-gray-400 py-2 text-xl">
                    <label>Password</label>
                    <input
                        className="rounded-lg bg-white mt-2 p-2 text-xl  focus:bg-white focus:outline-none"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-col text-gray-400 py-2 text-xl">
                    <label>Description</label>
                    <input
                        className="rounded-lg bg-white mt-2 p-2 text-xl  focus:bg-white focus:outline-none"
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="flex flex-col text-gray-400 py-2 text-xl">
                    <label>Year Created</label>
                    <input
                        className="rounded-lg bg-white mt-2 p-2 text-xl  focus:bg-white focus:outline-none"
                        type="number"
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div className="flex flex-col text-gray-400 py-2 text-xl">
                    <label>Training Venue</label>
                    <input
                        className="rounded-lg bg-white mt-2 p-2 text-xl  focus:bg-white focus:outline-none"
                        type="text"
                        onChange={(e) => setVenue(e.target.value)}
                    />
                </div>
                <button className="w-full my-5 py-2 bg-orange shadow-lg   text-black font-semibold rounded-lg">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default FormClub;
