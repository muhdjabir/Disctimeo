import { useState } from "react";
import Selector from "./Selector";

const FormRegister = () => {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [name, setName] = useState<String>("");
    const [year, setYear] = useState<String>("");
    const [position, setPosition] = useState<String>("");
    const [level, setLevel] = useState<String>("");
    const [contact, setContact] = useState<String>("");

    const role = ["Handler", "Cutter", "Hybrid"];
    const years = [
        "Less than 3 years of experience",
        "3-5 years of experience",
        "5-10 years of experience",
        "More than 10 years of experience",
    ];
    const levelOptions = ["Casual", "School", "Club", "National"];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, name, password, contact, position, year, level);
    };

    return (
        <div className="bg-white flex flex-col justify-center font-montserrat">
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
                    <label>Display Name</label>
                    <input
                        className="rounded-lg bg-white mt-2 p-2 text-xl focus:bg-white focus:outline-none"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col text-gray-400 py-2 text-xl">
                    <label>Contact Number</label>
                    <input
                        className="rounded-lg bg-white mt-2 p-2 text-xl  focus:bg-white focus:outline-none"
                        type="number"
                        onChange={(e) => setContact(e.target.value)}
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
                    <label>Choose your position</label>
                    <Selector
                        options={role}
                        comp="Position"
                        updateState={setPosition}
                    />
                    <label>Years of Experience</label>
                    <Selector
                        options={years}
                        comp="Years of experience"
                        updateState={setYear}
                    />
                    <label>Commitment Level</label>
                    <Selector
                        options={levelOptions}
                        comp="current competitive level"
                        updateState={setLevel}
                    />
                </div>
                <button className="w-full my-5 py-2 bg-orange shadow-lg   text-black font-semibold rounded-lg">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default FormRegister;
