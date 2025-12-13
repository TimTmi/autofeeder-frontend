import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import HBox from "../../components/HBox";
import VBox from "../../components/VBox";
import PasswordInput from "../../components/PasswordInput";
import EatingCat from "../../assets/images/eating-cat.jpg";

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
    <HBox className="flex-1 min-h-0 gap-10">
      <div
        className="flex-1 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${EatingCat})` }}
      />

      <VBox className="flex-1 justify-center items-start">
        <form onSubmit={handleSubmit} className="w-1/2 gap-4 flex flex-col">
          <h1 className="text-4xl font-bold">Sign up</h1>

          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="border rounded-lg p-4 border-2 border-secondary focus:outline-none focus:border-primary/60 focus:bg-primary/20 transition-colors"
          />

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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirm" className="sr-only">
            Confirm password
          </label>
          <PasswordInput
            id="confirm"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          {error && <div className="text-red-600">{error}</div>}

          <button
            type="submit"
            className="p-4 rounded-lg text-center font-semibold bg-primary/60 hover:bg-primary/80 active:bg-primary"
          >
            Sign up
          </button>

          <Link to="/signin" className="text-center hover:text-primary">
            Already have an account? Sign in
          </Link>
        </form>
      </VBox>
    </HBox>
  );
};

export default Signup;
