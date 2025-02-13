import { Prisma } from '@prisma/client';
import { wallSelect } from './wall.select';

export type WallDto = Prisma.WallGetPayload<{ select: typeof wallSelect }>;
