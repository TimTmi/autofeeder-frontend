import { Link } from "react-router-dom";
import HBox from "components/HBox";
import VBox from "components/VBox";
import PasswordInput from "components/PasswordInput";
import EatingCat from "assets/images/eating-cat.jpg";

const Signin = () => {
  return (
    <HBox className="flex-1 gap-10">
      <div
        className="flex-1 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${EatingCat})` }}
      />

      <VBox className="flex-1 justify-center items-start">
        <VBox className="w-1/2 gap-4">
          <h1 className="text-4xl font-bold">Sign in</h1>

          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border rounded-lg p-4 border-2 border-secondary focus:outline-none focus:border-primary/60 focus:bg-primary/20 transition-colors"
          />

          <PasswordInput />

          <Link
            to="/home"
            className="p-4 rounded-lg text-center font-semibold bg-primary/60 hover:bg-primary/80 active:bg-primary"
          >
            Sign in
          </Link>

          <Link to="/signin" className="text-center hover:text-primary">
            Need an account? Sign up
          </Link>
        </VBox>
      </VBox>
    </HBox>
  );
};

export default Signin;
