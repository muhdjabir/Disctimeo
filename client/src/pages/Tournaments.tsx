const work = require("../assets/Work.png");

// Implementation delayed pending further research and deliberation
// regarding the most efficient logic to list tournaments
// Need to account for tournament sign ups, teams and etc
const Tournaments = () => {
    return (
        <div className="flex flex-col text-center font-montserrat justify-center">
            <h1 className="text-3xl mb-5">Tournaments</h1>{" "}
            <div className=" mx-auto">
                <img src={work} alt="" />
            </div>
        </div>
    );
};

export default Tournaments;
