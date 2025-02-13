import { Prisma } from '@prisma/client';
import { wallSelect } from 'src/wall/wall.select';
import { zoneSelect } from 'src/zone/zone.select';

export const routeSelect = {
  id: true,
  name: true,
  zones: { select: zoneSelect },
  wall: { select: wallSelect },
} satisfies Prisma.RouteSelect;
