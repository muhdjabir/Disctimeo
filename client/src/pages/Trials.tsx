const work = require("../assets/Work.png");
const header = require("../assets/trialsheader.png");

const Trials = () => {
    return (
        <div className="flex flex-col text-center font-montserrat justify-center">
            {/* <h1 className="text-3xl mb-5">Trials</h1>{" "} */}
            <div className=" mx-auto">
                <img src={header} alt="" />
            </div>
            <div className=" mx-auto">
                <img src={work} alt="" />
            </div>
        </div>
    );
};

export default Trials;
