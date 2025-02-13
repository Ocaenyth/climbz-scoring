import { Prisma } from '@prisma/client';

export const climberSelect = {
  id: true,
  firstName: true,
  lastName: true,
  age: true,
  gender: true,
  createdAt: true,
  updatedAt: true,
  // FIXME: Add ?
  //   successfulZones: true,
} satisfies Prisma.ClimberSelect;
