import ViewClubProfile from "../components/ViewClubProfile";
import { useLocation } from "react-router-dom";

// Access to view club is from clicking view more on the Clubs Page
// by interacting with the respective Club Card
// Accepts the ClubProfileObject and passes it into ViewClubProfile
const ViewClub = () => {
    const location = useLocation();
    const propsData = location.state;

    return (
        <div className="text-black body-font font-poppins text-center">
            <h1 className="mb-5">Club Profile</h1>
            <ViewClubProfile profile={propsData} />
        </div>
    );
};

export default ViewClub;
