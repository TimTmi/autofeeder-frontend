import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import EatingCat from "../../assets/images/eating-cat.jpg";
import Icon from "../../assets/images/icon.png";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name) return setError("Please enter your name.");
    if (!email) return setError("Please enter your email.");
    if (!password) return setError("Please enter a password.");
    if (password !== confirm) return setError("Passwords do not match.");

    // TODO: call signup API
    navigate("/home");
  };

  return (
    <div className="flex w-screen h-screen ">
      <div className="flex w-full h-full bg-white overflow-hidden shadow-2xl">
        <Link
          to="/home"
          className="absolute top-6 right-8 flex items-center gap-2 hover:opacity-50"
        >
          <img src={Icon} alt="Autofeeder" className="w-10 h-10" />
          <div className="text-xl font-bold">FoodFPet</div>
        </Link>

        <div className="w-1/2 relative">
          <img
            src={EatingCat}
            alt="Eating cat"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center p-12">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-6"
          >
            <div>
              <h1 className="text-4xl font-bold mb-2">Sign up</h1>
              <p className="text-gray-500">
                Sign up to feed your pet with FoodFPet
              </p>
            </div>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="w-full border border-[#b89f84] rounded-lg p-4 focus:outline-none focus:border-[#b89f84] transition-colors"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border border-[#b89f84] rounded-lg p-4 focus:outline-none focus:border-[#b89f84] transition-colors"
            />

            <PasswordInput
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <PasswordInput
              placeholder="Confirm password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <button
              type="submit"
              className="w-full p-4 rounded-lg text-white font-semibold bg-[#b89f84] hover:bg-[#a68d73] transition-colors"
            >
              Sign up
            </button>

            <Link
              to="/signin"
              className="text-center text-gray-600 hover:text-[#b89f84] transition-colors"
            >
              Already have an account?{" "}
              <span className="font-semibold">Sign in</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
