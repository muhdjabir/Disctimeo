import ClubPrompt from "../components/ClubPrompt";
import Hero from "../components/Hero";
import Rules from "../components/Rules";

const Home = () => {
    return (
        <div className="body-font font-poppins text-center content-center bg-white">
            <Hero />
            <Rules />
            <ClubPrompt />
        </div>
    );
};

export default Home;
