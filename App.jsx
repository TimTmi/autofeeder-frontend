import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header.jsx";
import VBox from "./components/VBox";
import Signup from "./pages/Signup/Signup.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import Home from "./pages/Home/Home.jsx";
import FeederStatus from "./pages/FeederStatus/FeederStatus.jsx";
import FeedingSchedule from "./pages/FeedingSchedule/FeedingSchedule.jsx";
import FeedingHistory from "./pages/FeedingHistory/FeedingHistory.jsx";
import Chatbot from "./pages/Chatbot/Chatbot.jsx";
import Settings from "./pages/Settings/Settings.jsx";

const AuthLayout = () => {
  return (
    <div className="flex-1 flex">
      <Outlet />
    </div>
  );
};

const MainLayout = () => {
  return (
    <VBox className="flex-1">
      <Header />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </VBox>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/status" element={<FeederStatus />} />
          <Route path="/schedule" element={<FeedingSchedule />} />
          <Route path="/history" element={<FeedingHistory />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
