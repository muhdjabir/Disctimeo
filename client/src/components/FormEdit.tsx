import { useAuthContext } from "../hook/useAuthContext";

const FormEdit = () => {
    const { user } = useAuthContext();

    return <div> {user.email}</div>;
};

export default FormEdit;
