import { Prisma } from '@prisma/client';
import { routeSelect } from 'src/route/route.select';

export const zoneSummarySelect = {
  id: true,
  number: true,
} satisfies Prisma.ZoneSelect;

export const zoneSelect = {
  ...zoneSummarySelect,
  route: { select: routeSelect },
} satisfies Prisma.ZoneSelect;
