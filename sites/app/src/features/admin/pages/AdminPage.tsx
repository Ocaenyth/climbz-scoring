import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const AdminPage = () => {
  return (
    <div>
      <Link to="/privAdmin/competition-categories" className={buttonVariants()}>
        Catégories
      </Link>
      <Link to="/privAdmin/climbers" className={buttonVariants()}>
        Participant.es
      </Link>
      <Link to="/privAdmin/zones" className={buttonVariants()}>
        Zones
      </Link>
      <Link to="/privAdmin/routes" className={buttonVariants()}>
        Voies
      </Link>
      <Link to="/privAdmin/walls" className={buttonVariants()}>
        Couloirs
      </Link>
    </div>
  );
};
