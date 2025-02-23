import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useValidateClimberZone } from "@/features/climber/hooks/useValidateClimberZone";
import classNames from "classnames";
import { useRoutes } from "../../route/hooks/useRoutes";

export interface ClimberRouteCardListProps {
  climberId: string;
}

export const ClimberRouteCardList = ({
  climberId,
}: ClimberRouteCardListProps) => {
  const { data } = useRoutes();
  const { mutate } = useValidateClimberZone(climberId);
  return (
    <div>
      {data &&
        data.map((route) => {
          const currentMaxSuccesfulZone: number =
            route.successfulClimbers.find((climber) => {
              return climber.climberId === climberId;
            })?.maxSuccessfulZone || 0;
          const zones = [];
          for (let i = 1; i <= route.zoneCount; i++) {
            zones.push(i);
          }
          return (
            <Card key={route.id}>
              <CardHeader>
                <CardTitle>{route.name}</CardTitle>
                <CardDescription>Couloir {route.wall.number}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  key={"reset"}
                  className="font-semibold"
                  onClick={() => {
                    mutate({ routeId: route.id, maxZone: 0 });
                  }}
                >
                  Reset
                </Button>
                {zones.map((zoneNumber) => (
                  <Button
                    key={zoneNumber}
                    onClick={() =>
                      mutate({
                        routeId: route.id,
                        maxZone: zoneNumber,
                      })
                    }
                    className={classNames("font-semibold", {
                      "bg-green-500": zoneNumber <= currentMaxSuccesfulZone,
                    })}
                  >
                    {zoneNumber !== route.zoneCount ? zoneNumber : "TOP"}
                  </Button>
                ))}
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
};
