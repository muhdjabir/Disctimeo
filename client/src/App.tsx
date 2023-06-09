import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hook/useAuthContext";
import { Helmet, HelmetProvider, HelmetData } from "react-helmet-async";

// Pages & Components
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ClubRegister from "./pages/ClubRegister";
import Scrimmages from "./pages/Scrimmages";
import Clubs from "./pages/Clubs";
import Trials from "./pages/Trials";
import ProfilePage from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Tournaments from "./pages/Tournaments";
import ViewClub from "./pages/ViewClub";
import ViewTrialees from "./pages/ViewTrialees";

const helmetData = new HelmetData({});

function App() {
    // App consists of 7 main pages connected by Routers
    // 7 pages are Landing, User Authentication, Feed, Trials, Club, Pickups and Tournaments
    // Access to Feed is blocked by user authentication
    // Trials, Club Pickups and tournaments can be viewed by visitors but they cannot modify data
    const { user } = useAuthContext();

    return (
        <div className="text-2xl font-bold h-screen bg-white">
            <Helmet helmetData={helmetData}>
                <meta
                    name="description"
                    content="Singapore Ultimate's Community Hub"
                />
                <title>Disctimeo</title>
            </Helmet>
            <BrowserRouter>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/feed"
                            element={user ? <Feed /> : <Navigate to="/login" />}
                        />
                        <Route
                            path="/register"
                            element={
                                !user ? <Register /> : <Navigate to="/feed" />
                            }
                        />
                        <Route
                            path="/clubregister"
                            element={
                                !user ? (
                                    <ClubRegister />
                                ) : (
                                    <Navigate to="/feed" />
                                )
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                !user ? <Login /> : <Navigate to="/feed" />
                            }
                        />
                        <Route path="/scrimmages" element={<Scrimmages />} />
                        <Route path="/clubs" element={<Clubs />} />
                        <Route path="/clubs/view" element={<ViewClub />} />
                        <Route path="/trials" element={<Trials />} />
                        <Route path="/trials/view" element={<ViewTrialees />} />
                        <Route path="/tournaments" element={<Tournaments />} />
                        <Route
                            path="/profile"
                            element={
                                user ? <ProfilePage /> : <Navigate to="/" />
                            }
                        />
                        <Route path="/profile/edit" element={<EditProfile />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
