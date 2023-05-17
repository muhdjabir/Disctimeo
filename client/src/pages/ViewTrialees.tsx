import { useLocation } from "react-router-dom";
import ViewTrialeeProfile from "../components/ViewTrialeeProfile";

// View Trialees page is only accessible by the club organising the trials
// Accept props that includes the trialee list which is the emails of the
// trialees who have joined the trials
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
