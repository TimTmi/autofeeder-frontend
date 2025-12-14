import { Link, useLocation } from "react-router-dom";
import HBox from "./HBox";
import Panel from "./Panel";
import Icon from "../assets/images/icon.png";

const Header = () => {
  const location = useLocation();

  return (
    <Panel className="mx-6 mt-6">
      <HBox className="justify-between p-4 pt-4 pr-12">
        <Link to="/home" className="flex items-center gap-2">
          <img src={Icon} alt="Autofeeder" className="w-10 h-10" />
          <div className="text-xl font-bold">FoodFPet</div>
        </Link>

        <nav className="flex gap-4 items-center">
          <Link
            to="/home"
            className={`px-3 py-2 rounded-lg transition-colors hover:bg-[#cbb49f] hover:text-white ${
              location.pathname === "/home" ? "bg-[#cbb49f] text-white" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/status"
            className={`px-3 py-2 rounded-lg transition-colors hover:bg-[#cbb49f] hover:text-white ${
              location.pathname === "/status" ? "bg-[#cbb49f] text-white" : ""
            }`}
          >
            Feeder Status
          </Link>

          <Link
            to="/schedule"
            className={`px-3 py-2 rounded-lg transition-colors hover:bg-[#cbb49f] hover:text-white ${
              location.pathname === "/schedule" ? "bg-[#cbb49f] text-white" : ""
            }`}
          >
            Feeding Schedule
          </Link>

          <Link
            to="/history"
            className={`px-3 py-2 rounded-lg transition-colors hover:bg-[#cbb49f] hover:text-white ${
              location.pathname === "/history" ? "bg-[#cbb49f] text-white" : ""
            }`}
          >
            Feeding Log
          </Link>

          <Link
            to="/chatbot"
            className={`px-3 py-2 rounded-lg transition-colors hover:bg-[#cbb49f] hover:text-white ${
              location.pathname === "/chatbot" ? "bg-[#cbb49f] text-white" : ""
            }`}
          >
            AI
          </Link>

          <Link
            to="/settings"
            className={`px-3 py-2 rounded-lg transition-colors hover:bg-[#cbb49f] hover:text-white ${
              location.pathname === "/settings" ? "bg-[#cbb49f] text-white" : ""
            }`}
          >
            Settings
          </Link>

          <Link
            to="/signin"
            className={`px-3 py-2 font-medium text-[#a38f7d] rounded-lg hover:bg-[#cbb49f] hover:text-white transition-colors ${
              location.pathname === "/settings" ? "bg-[#cbb49f] text-white" : ""
            }`}
          >
            Sign in/Sign up
          </Link>
        </nav>
      </HBox>
    </Panel>
  );
};

export default Header;
