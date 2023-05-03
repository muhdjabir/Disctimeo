const logo = require("../assets/logo.png");

type ProfileObject = {
    name: string;
    contact: number;
    years: string;
    position: string;
    level: string;
    club: string;
};

const ProfileCard = ({ profile }: { profile: ProfileObject }) => {
    return (
        <div className="items-start justify-center text-left bg-slate shadow-lg m-5 p-5 font-montserrat font-semibold">
            <div className="flex">
                <div className="flex-none">
                    <img src={logo} alt="" />{" "}
                </div>
                <div className="flex-auto w-64">
                    <h4>{profile.name}</h4>
                    <h4 className="font-medium">{profile.level}</h4>
                </div>
            </div>
            <div className="font-normal">
                <p>Contact Number: {profile.contact}</p>
                <p>Preferred Position: {profile.position}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
