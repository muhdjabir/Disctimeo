import { useLocation } from "react-router-dom";
import ViewTrialeeProfile from "../components/ViewTrialeeProfile";

const ViewTrialees = () => {
    const location = useLocation();
    const propsData = location.state;

    return (
        <div className="text-black body-font font-poppins text-center">
            <h1>View your Trialees</h1>
            <ViewTrialeeProfile trialees={propsData} />
        </div>
    );
};

export default ViewTrialees;
