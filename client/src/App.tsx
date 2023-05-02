import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages & Components
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ClubRegister from "./pages/ClubRegister";

function App() {
    return (
        <div className="text-2xl font-bold h-screen bg-white">
            <BrowserRouter>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/feed" element={<Feed />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/clubregister"
                            element={<ClubRegister />}
                        />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
