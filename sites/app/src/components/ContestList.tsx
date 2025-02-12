import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const ContestList = () => {
  // FIXME: Get these as an argument passed down by parent

  const contests = [
    {
      uuid: "3d6b6498-19f2-4253-b8cb-c9647d3a7527",
      name: "Vieux lézards 2023 - Metz",
    },
    {
      uuid: "cf0cafc9-badf-4718-9409-b49b144258ca",
      name: "Vieux lézards 2023 - Pont-à-Mousson",
    },
  ];

  return (
    <div className="grid justify-items-center">
      {contests.map((contest) => {
        return (
          <Button asChild key={contest.uuid}>
            <Link to={`/contest/${contest.uuid}`}>{contest.name}</Link>
          </Button>
        );
      })}
    </div>
  );
};
