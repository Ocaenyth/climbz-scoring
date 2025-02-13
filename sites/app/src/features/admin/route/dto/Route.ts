import { Wall } from "@/features/admin/wall/dto/Wall";
import { Zone } from "@/features/admin/zone/dto/Zone";
import { z } from "zod";

export interface Route {
  id: string;
  name: string;
  zones: Zone[];
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
