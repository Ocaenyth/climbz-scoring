import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";

export const HomeButton = () => {
  return (
    <Link to="/" className={buttonVariants({ size: "icon" })}>
      <Home></Home>
    </Link>
  );
};
