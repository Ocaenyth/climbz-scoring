import { ClimberRouteCardList } from "@/features/climber/components/ClimberRouteCardList";
import { useParams } from "react-router-dom";
import { useClimber } from "../hooks/useClimber";

export interface ClimberContestPageParams {
  climberId: string;
}

export const ClimberContestPage = () => {
  const { climberId }: ClimberContestPageParams = useParams<
    keyof ClimberContestPageParams
  >() as ClimberContestPageParams;
  const { data } = useClimber(climberId);
  return (
    <div>
      {data && (
        <div className="text-center text-[40px]">
          {data.firstName} {data.lastName} ({data.competitionCategory.name})
        </div>
      )}
      <ClimberRouteCardList climberId={climberId} />
    </div>
  );
};
