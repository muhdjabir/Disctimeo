import ViewClubProfile from "../components/ViewClubProfile";
import { useLocation } from "react-router-dom";

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
