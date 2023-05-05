const work = require("../assets/Work.png");

const Scrimmages = () => {
    return (
        <div className="flex flex-col text-center font-montserrat justify-center">
            <h1 className="text-3xl mb-5">Scrimmages</h1>{" "}
            <div className=" mx-auto">
                <img src={work} alt="" />
            </div>
        </div>
    );
};

export default Scrimmages;
