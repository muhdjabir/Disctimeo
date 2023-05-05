const work = require("../assets/Work.png");

const Clubs = () => {
    return (
        <div className="flex flex-col text-center font-montserrat justify-center">
            <h1 className="text-3xl mb-5">Clubs</h1>{" "}
            <div className=" mx-auto">
                <img src={work} alt="" />
            </div>
        </div>
    );
};

export default Clubs;
