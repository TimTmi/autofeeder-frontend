import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import HBox from "../../components/HBox";
import VBox from "../../components/VBox";
import PasswordInput from "../../components/PasswordInput";
import EatingCat from "../../assets/images/eating-cat.jpg";

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
    <HBox className="flex-1 gap-10">
      <div
        className="flex-1 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${EatingCat})` }}
      />

      <VBox className="flex-1 justify-center items-start">
        <form onSubmit={handleSubmit} className="w-1/2 gap-4 flex flex-col">
          <h1 className="text-4xl font-bold">Sign in</h1>

          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border rounded-lg p-4 border-2 border-secondary focus:outline-none focus:border-primary/60 focus:bg-primary/20 transition-colors"
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
            className="p-4 rounded-lg text-center font-semibold bg-primary/60 hover:bg-primary/80 active:bg-primary"
          >
            Sign in
          </button>

          <Link to="/signup" className="text-center hover:text-primary">
            Need an account? Sign up
          </Link>
        </form>
      </VBox>
    </HBox>
  );
};

export default Signin;
