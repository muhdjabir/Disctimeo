import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages & Components
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="text-3xl font-bold">
            <BrowserRouter>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Feed" element={<Feed />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
