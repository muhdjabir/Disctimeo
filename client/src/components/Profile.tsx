const logo = require("../assets/group.png");

type ProfileObject = {
    name: string;
    contact: number;
    years: string;
    position: string;
    level: string;
    club: string;
};

const Profile = ({ profile }: { profile: ProfileObject }) => {
    return (
        <div className="font-montserrat ">
            <div className="w-full lg:w-8/12 px-4 mx-auto ">
                <div className=" flex flex-col min-w-0 break-words bg-slate w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 flex justify-center">
                                <div className="">
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <h3 className="text-2xl font-bold leading-normal mb-2 ">
                                {profile.name} || {profile.contact}
                            </h3>
                            {profile.club && (
                                <div className="text-sm leading-normal mt-0 mb-2  font-medium uppercase">
                                    {profile.club}
                                </div>
                            )}
                            <div className="mb-2 font-medium mt-10">
                                {profile.years} || {profile.level}
                            </div>
                            <div className="mb-2 font-medium">
                                Preferred Role: {profile.position}
                            </div>
                        </div>
                        <div className="mt-10 py-10  text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4">
                                    {/* <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        An artist of considerable range, Jenna
                                        the name taken by Melbourne-raised,
                                        Brooklyn-based Nick Murphy writes,
                                        performs and records all of his own
                                        music, giving it a warm, intimate feel
                                        with a solid groove structure. An artist
                                        of considerable range.
                                    </p> */}
                                    <button className="bg-lime font-medium p-2 rounded-lg">
                                        Edit your profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
