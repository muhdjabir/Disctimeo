const work = require("../assets/Work.png");

const Tournaments = () => {
    return (
        <div className="flex flex-col text-center font-montserrat justify-center">
            <h1 className="text-3xl">Tournaments</h1>{" "}
            <div className=" mx-auto">
                <img src={work} alt="" />
            </div>
        </div>
    );
};

export default Tournaments;
