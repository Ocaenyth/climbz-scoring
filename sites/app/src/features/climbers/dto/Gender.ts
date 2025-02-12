import { z } from "zod";

export const GenderEnum = z.enum(["WOMAN", "MAN", "OTHER"]);
export type Gender = z.infer<typeof GenderEnum>;
