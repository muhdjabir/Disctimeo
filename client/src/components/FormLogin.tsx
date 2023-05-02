import { useState } from "react";

const FormLogin = () => {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(email, password);
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
                    <label>Password</label>
                    <input
                        className="rounded-lg bg-white mt-2 p-2 text-xl  focus:bg-white focus:outline-none"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="w-full my-5 py-2 bg-orange shadow-lg   text-black font-semibold rounded-lg">
                    Login
                </button>
            </form>
        </div>
    );
};

export default FormLogin;
