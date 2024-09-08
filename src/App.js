import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import MyFeed from "./components/MyFeed";
import CreatePost from "./components/CreatePost";
import AboutUs from "./components/AboutUs";
import ManagePost from "./components/ManagePost";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="w-full bg-banner-bg bg-no-repeat bg-center bg-cover relative overflow-hidden min-h-screen flex flex-col justify-between">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/my-feed" element={<MyFeed />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/manage-post" element={<ManagePost />} />
            <Route path="/user-profile" element={<UserProfile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
