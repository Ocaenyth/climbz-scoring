import { Check } from "lucide-react";
import { Climber } from "../dto/Climber";
import { InvalidCompetitionCategoryIcon } from "./InvalidCompetitionCategoryIcon";

export interface ClimberCompetitionCategoryCellProps {
  climber: Climber;
}

export const ClimberCompetitionCategoryCell = ({
  climber,
}: ClimberCompetitionCategoryCellProps) => {
  const competitionCategory = climber.competitionCategory;
  const isGenderValid =
    climber.gender == "OTHER" || climber.gender == competitionCategory.gender;
  const isAgeValid =
    competitionCategory.minAge <= climber.age &&
    climber.age <= competitionCategory.maxAge;

  return (
    <div>
      {competitionCategory.name}
      {isGenderValid && isAgeValid ? (
        <Check className="bg-green-500" />
      ) : (
        <InvalidCompetitionCategoryIcon
          isGenderValid={isGenderValid}
          isAgeValid={isAgeValid}
          climber={climber}
        />
      )}
    </div>
  );
};
