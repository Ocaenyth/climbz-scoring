import { Prisma } from '@prisma/client';
import { wallSummarySelect } from 'src/wall/wall.select';

export const routeSummarySelect = {
  id: true,
  name: true,
  zoneCount: true,
} satisfies Prisma.RouteSelect;

export const routeSelect = {
  ...routeSummarySelect,
  successfulClimbers: { select: { climberId: true, maxSuccessfulZone: true } },
  wall: { select: wallSummarySelect },
} satisfies Prisma.RouteSelect;
