import { Link, useParams } from "react-router-dom";
import { Button } from "./ui/button";

export const ContestPage = () => {
  const { contestUuid } = useParams();
  //   TODO: Get contest general information (name, participants count, ...)
  //   TODO: display current scoreboard
  return (
    <div>
      This is the page of contest: {contestUuid}
      <Button asChild key={contestUuid}>
        <Link to={`/contest/${contestUuid}/user/alex`}>Alex</Link>
      </Button>
    </div>
  );
};
