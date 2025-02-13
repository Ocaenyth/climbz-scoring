import { Prisma } from '@prisma/client';
import { routeSummarySelect } from 'src/route/route.select';

export const wallSummarySelect = {
  id: true,
  number: true,
} satisfies Prisma.WallSelect;

export const wallSelect = {
  ...wallSummarySelect,
  routes: {
    select: routeSummarySelect,
    orderBy: [{ name: 'asc' }, { id: 'asc' }],
  },
} satisfies Prisma.WallSelect;
