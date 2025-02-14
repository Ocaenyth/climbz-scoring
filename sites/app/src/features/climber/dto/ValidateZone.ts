import { z } from "zod";

export const validateZonesSchema = z.object({
  routeId: z.string().uuid(),
  maxZone: z.coerce.number().nonnegative().int(),
});

export type ValidateZones = z.infer<typeof validateZonesSchema>;
