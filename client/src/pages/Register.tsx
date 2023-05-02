import Header from "../components/Header";
import FormRegister from "../components/FormRegister";

const Register = () => {
    return (
        <div>
            <Header
                heading="Sign Up to create an account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/login"
                club={true}
            />
            <FormRegister />
        </div>
    );
};

export default Register;
