import { CompetitionCategory } from "@/features/competition-category/dto/CompetitionCategory";
import { z } from "zod";
import { Gender, GenderEnum } from "./Gender";

export interface Climber {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  competitionCategory: CompetitionCategory;
}

export const createClimberSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.coerce.number(),
  gender: GenderEnum,
  competitionCategoryId: z.string().uuid(),
});

export type CreateClimber = z.infer<typeof createClimberSchema>;

export const updateClimberSchema = createClimberSchema.partial();
export type UpdateClimber = z.infer<typeof updateClimberSchema>;
