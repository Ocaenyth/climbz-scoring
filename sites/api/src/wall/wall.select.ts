import { Prisma } from '@prisma/client';
import { routeSelect } from 'src/route/route.select';

export const wallSelect = {
  id: true,
  number: true,
  routes: {
    select: routeSelect,
    orderBy: [{ name: 'asc' }, { id: 'asc' }],
  },
} satisfies Prisma.WallSelect;
