import Header from "../components/Header";
import FormLogin from "../components/FormLogin";

const Login = () => {
    return (
        <div className="body-font font-poppins text-center content-center bg-white">
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Sign Up"
                linkUrl="/register"
                club={false}
            />
            <FormLogin />
        </div>
    );
};

export default Login;
