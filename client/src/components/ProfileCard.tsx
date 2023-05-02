type Profile = {
    name: string;
    contact: number;
    years: string;
    position: string;
    level: string;
};

const ProfileCard = ({ profile }: { profile: Profile }) => {
    return (
        <div>
            <h4>{profile.name}</h4>
            <p>
                <strong>Contact Number: </strong>
                {profile.contact}
            </p>
            <p>
                <strong>Preferred Position: </strong>
                {profile.position}
            </p>
        </div>
    );
};

export default ProfileCard;
