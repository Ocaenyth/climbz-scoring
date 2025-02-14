import { z } from "zod";

export interface Wall {
  id: string;
  number: number;
  // routes: Route[];
}

export const createWallSchema = z.object({ number: z.coerce.number() });
export type CreateWall = z.infer<typeof createWallSchema>;

export const updateWallSchema = createWallSchema.partial();
export type UpdateWall = z.infer<typeof updateWallSchema>;
