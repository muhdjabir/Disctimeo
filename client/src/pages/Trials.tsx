const work = require("../assets/Work.png");

const Trials = () => {
    return (
        <div className="flex flex-col text-center font-montserrat justify-center">
            <h1>Trials</h1>{" "}
            <div className=" mx-auto">
                <img src={work} alt="" />
            </div>
        </div>
    );
};

export default Trials;
