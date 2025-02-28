import { Climber } from "@/features/climber/dto/Climber";

export interface CategoryResult {
  climber: Climber;
  rank: number;
  score: number;
}
