import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hook/useAuthContext";

// Pages & Components
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ClubRegister from "./pages/ClubRegister";

function App() {
    const { user } = useAuthContext();

    return (
        <div className="text-2xl font-bold h-screen bg-white">
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
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
