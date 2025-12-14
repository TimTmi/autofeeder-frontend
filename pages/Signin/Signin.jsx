import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import EatingCat from "../../assets/images/eating-cat.jpg";
import Icon from "../../assets/images/icon.png";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!email) return setError("Please enter your email.");
    if (!password) return setError("Please enter your password.");

    // TODO: wire up real auth request here
    // For now navigate to home on successful client-side validation
    navigate("/home");
  };

  return (
    <div className="flex w-screen h-screen ">
      <div className="flex w-full h-full bg-white overflow-hidden shadow-2xl">
        
        <Link to="/home" className="absolute top-6 right-8 flex items-center gap-2 hover:opacity-50">
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

        <div className="w-1/2 flex flex-col justify-center items-center p-10">
          <form onSubmit={handleSubmit} className="w-1/2 gap-4 flex flex-col">
            <div>
              <h1 className="text-4xl font-bold mb-2">Sign in</h1>
              <p className="text-gray-500">
                Please login to feed your pet with FoodFPet
              </p>
            </div>

            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border rounded-lg p-4 border-1 border-[#b89f84]"
            />

            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <PasswordInput
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <div className="text-red-600">{error}</div>}

            <button
              type="submit"
              className="p-4 rounded-lg text-center text-white font-semibold bg-[#b89f84] hover:bg-[#a68d73] active:bg-[#b89f84]"
            >
              Sign in
            </button>

            <Link
              to="/signup"
              className="text-gray-600 text-center hover:text-[#b89f84] transition-colors"
            >
              Need an account? <span className="font-semibold">Sign up</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
