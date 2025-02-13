import { Prisma } from '@prisma/client';
import { routeSelect } from 'src/route/route.select';

export const zoneSelect = {
  id: true,
  number: true,
  route: { select: routeSelect },
} satisfies Prisma.ZoneSelect;
