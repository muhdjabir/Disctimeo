import Header from "../components/Header";
import FormRegister from "../components/FormRegister";

// User Registration Page for players to register their account
// Consists of Header to route to navigate to login or club reg page
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
