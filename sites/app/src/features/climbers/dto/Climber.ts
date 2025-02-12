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
  // successfulZones
}

export const createClimberSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.coerce.number(),
  gender: GenderEnum,
});

export type CreateClimber = z.infer<typeof createClimberSchema>;

export const updateClimberSchema = createClimberSchema.partial();
export type UpdateClimber = z.infer<typeof updateClimberSchema>;
