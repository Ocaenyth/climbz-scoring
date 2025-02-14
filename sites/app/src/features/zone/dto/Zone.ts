import { Route } from "@/features/route/dto/Route";
import { z } from "zod";

export interface Zone {
  id: string;
  number: number;
  route: Route;
}

export const createZoneSchema = z.object({ number: z.coerce.number() });
export type CreateZone = z.infer<typeof createZoneSchema>;

export const updateZoneSchema = createZoneSchema.partial();
export type UpdateZone = z.infer<typeof updateZoneSchema>;
