import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { X } from "lucide-react";
import { Climber } from "../dto/Climber";

export interface InvalidCompetitionCategoryIconProps {
  isGenderValid: boolean;
  isAgeValid: boolean;
  climber: Climber;
}

export const InvalidCompetitionCategoryIcon = ({
  isGenderValid,
  isAgeValid,
  climber,
}: InvalidCompetitionCategoryIconProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <X className="bg-red-500" />
        </TooltipTrigger>
        <TooltipContent>
          <div>
            {!isGenderValid
              ? `Le genre de la personne (${climber.gender}) ne correspond à celui de sa catégorie (${climber.competitionCategory.gender})`
              : ""}
          </div>
          <div>
            {!isAgeValid
              ? `L'âge de la personne (${climber.age}) est en dehors des limites d'âge de sa catégorie (${climber.competitionCategory.minAge} - ${climber.competitionCategory.maxAge})`
              : ""}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
