import { Prisma } from '@prisma/client';
import { climberSelect } from '../climber.select';

export type ClimberDto = Prisma.ClimberGetPayload<{
  select: typeof climberSelect;
}>;
