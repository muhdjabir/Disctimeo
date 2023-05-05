import { useAuthContext } from "../hook/useAuthContext";
import FormEdit from "../components/FormEdit";
import ClubFormEdit from "../components/ClubFormEdit";

const EditProfile = () => {
    const { user } = useAuthContext();

    return (
        <div className="text-center font-montserrat ">
            {user && user.role === "Player" && <FormEdit />}
            {user && user.role === "Club" && <ClubFormEdit />}
        </div>
    );
};

export default EditProfile;
