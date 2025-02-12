import { useParams } from "react-router-dom";
import { ContestantHeader } from "./ContestantHeader";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const UserContestPage = () => {
  let { contestUuid, userUuid } = useParams();
  // FIXME: Get list of climbing routes from back-end using contestUuid
  let climbingRoutes = [
    {
      number: 5,
      color: "Vert clair",
      grade: "6a",
    },
    {
      number: 1,
      color: "Bleu-bois",
      grade: "6a",
    },
  ];

  return (
    <div>
      <ContestantHeader />
      this is page of user {userUuid} for contest {contestUuid}
      {climbingRoutes
        .sort((a, b) => a.number - b.number)
        .map((climbingRoute) => {
          return (
            // FIXME: Make cards
            // [number] [preview-image]   [grade]
            // [number] [preview-image]   [grade]  [Check/Max hold]
            // [number] [preview-image]   [color]  [Check/Max hold]
            // [number] [preview-image]   [color]
            <Card key={climbingRoute.number} className="flex flex-row grow-0">
              <CardHeader className="flex flex-row grow-0">
                <CardTitle>{climbingRoute.number}</CardTitle>
                {/* FIXME: Make image clickable to open in full */}
                {/* FIXME: Make image clickable to open in full */}
                <img
                  className="aspect-square"
                  src="https://i.imgur.com/uZlSP9i_d.webp?maxwidth=760&fidelity=grand"
                />
              </CardHeader>
              <CardContent>
                <p>{climbingRoute.grade}</p>
                <p>{climbingRoute.color}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full"></Button>
              </CardFooter>
            </Card>
          );
        })}
    </div>
  );
};
