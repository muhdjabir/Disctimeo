import Header from "../components/Header";
import FormClub from "../components/FormClub";

const ClubRegister = () => {
    return (
        <div>
            <Header
                heading="Create a club account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/login"
                club={false}
            />
            <FormClub />
        </div>
    );
};

export default ClubRegister;
