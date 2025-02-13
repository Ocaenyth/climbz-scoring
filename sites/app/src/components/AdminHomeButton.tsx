import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";

export const AdminHomeButton = () => {
  return (
    <Link to="/privAdmin" className={buttonVariants({ size: "icon" })}>
      <Home></Home>
    </Link>
  );
};
