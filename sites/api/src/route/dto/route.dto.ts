import { Prisma } from '@prisma/client';
import { routeSelect } from '../route.select';

export type RouteDto = Prisma.RouteGetPayload<{ select: typeof routeSelect }>;
