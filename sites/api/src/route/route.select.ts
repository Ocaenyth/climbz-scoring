import { Prisma } from '@prisma/client';
import { wallSummarySelect } from 'src/wall/wall.select';
import { zoneSummarySelect } from 'src/zone/zone.select';

export const routeSummarySelect = {
  id: true,
  name: true,
} satisfies Prisma.RouteSelect;

export const routeSelect = {
  ...routeSummarySelect,
  zones: { select: zoneSummarySelect },
  wall: { select: wallSummarySelect },
} satisfies Prisma.RouteSelect;
