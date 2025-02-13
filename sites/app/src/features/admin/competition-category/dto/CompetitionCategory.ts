import { Gender, GenderEnum } from "@/features/admin/climber/dto/Gender";
import { z } from "zod";

export interface CompetitionCategory {
  id: string;
  name: string;
  minAge: number;
  maxAge: number;
  gender: Gender;
}

export const createCompetitionCategorySchema = z.object({
  name: z.string(),
  minAge: z.coerce.number(),
  maxAge: z.coerce.number(),
  gender: GenderEnum,
});
export type CreateCompetitionCategory = z.infer<
  typeof createCompetitionCategorySchema
>;

export const updateCompetitionCategorySchema =
  createCompetitionCategorySchema.partial();
export type UpdateCompetitionCategory = z.infer<
  typeof updateCompetitionCategorySchema
>;
