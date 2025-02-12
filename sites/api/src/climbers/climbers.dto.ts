import { Prisma } from '@prisma/client';
import { climbersSelect } from './climbers.select';

export type ClimberDto = Prisma.ClimberGetPayload<{
  select: typeof climbersSelect;
}>;
