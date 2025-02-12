import { Prisma } from '@prisma/client';
import { wallsSelect } from './walls.select';

export type WallDto = Prisma.WallGetPayload<{ select: typeof wallsSelect }>;
