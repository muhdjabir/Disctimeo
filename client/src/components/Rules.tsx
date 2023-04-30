const logo = require("../assets/group.png");

const Rules = () => {
    return (
        <div className="w-full bg-black py-16 px-4 rounded-lg">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={logo} alt="/" />
                <div className="flex flex-col justify-center gap-5">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-white py-2 text-poppins">
                        New to Ultimate?
                    </h1>
                    <p className="text-darkgrey text-xl text-right text-montserrat font-normal">
                        Visit the World Flying Disc Federation Website to learn
                        more about different types of Flying Disc Sports as well
                        as Spirit of The Game, central to enjoyment of Ultimate
                        Flying Disc Competitions
                    </p>
                    <div>
                        <a
                            href="https://rules.wfdf.org/"
                            className="bg-[#000000] px-5 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
                        >
                            WFDF Rulebook
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rules;
