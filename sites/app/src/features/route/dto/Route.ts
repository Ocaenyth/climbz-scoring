import { Wall } from "@/features/wall/dto/Wall";
import { z } from "zod";

export interface SuccessfulClimber {
  climberId: string;
  maxSuccessfulZone: number;
}

export interface Route {
  id: string;
  name: string;
  zoneCount: number;
  successfulClimbers: SuccessfulClimber[];
  wall: Wall;
}

export const createRouteSchema = z.object({
  name: z.string(),
  zoneCount: z.coerce.number(),
  wallId: z.string().uuid(),
});
export type CreateRoute = z.infer<typeof createRouteSchema>;

export const updateRouteSchema = createRouteSchema.partial();
export type UpdateRoute = z.infer<typeof updateRouteSchema>;
