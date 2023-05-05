import { useAuthContext } from "../hook/useAuthContext";
import FormEdit from "../components/FormEdit";

const EditProfile = () => {
    const { user } = useAuthContext();

    return (
        <div className="text-center font-montserrat ">
            <h1>Edit your profile</h1>
            {user && <FormEdit />}
        </div>
    );
};

export default EditProfile;
