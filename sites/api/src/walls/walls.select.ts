import { Prisma } from '@prisma/client';
import { routesSelect } from 'src/routes/routes.select';

export const wallsSelect = {
  id: true,
  number: true,
  routes: {
    select: routesSelect,
    orderBy: [{ name: 'asc' }, { id: 'asc' }],
  },
} satisfies Prisma.WallSelect;
