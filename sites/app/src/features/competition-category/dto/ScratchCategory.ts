import { z } from "zod";

export const ScratchCategoryEnum = z.enum(["YOUNG", "ADULT", "GLOBAL"]);
export type ScratchCategory = z.infer<typeof ScratchCategoryEnum>;
