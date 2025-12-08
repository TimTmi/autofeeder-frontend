import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import Home from "./pages/Home/Home.jsx";
import FeederStatus from "./pages/FeederStatus/FeederStatus.jsx";
import FeedingSchedule from "./pages/FeedingSchedule/FeedingSchedule.jsx";
import FeedingHistory from "./pages/FeedingHistory/FeedingHistory.jsx";
import Chatbot from "./pages/Chatbot/Chatbot.jsx";
import Settings from "./pages/Settings/Settings.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen p-10">
        <Outlet />
      </main>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-sans text-textDark antialiased relative">
        <Routes>
          {/* <Route path="/" element={<Navigate to="/"} */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          <Route path="/home" element={<Home />} />
          <Route path="/status" element={<FeederStatus />} />
          <Route path="/schedule" element={<FeedingSchedule />} />
          <Route path="/history" element={<FeedingHistory />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
