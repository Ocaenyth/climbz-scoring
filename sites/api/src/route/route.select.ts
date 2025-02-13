import { Prisma } from '@prisma/client';
import { wallSelect } from 'src/wall/wall.select';

export const routeSelect = {
  id: true,
  wall: { select: wallSelect },
} satisfies Prisma.RouteSelect;
