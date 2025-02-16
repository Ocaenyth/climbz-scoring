import { Prisma } from '@prisma/client';
import { competitionCategorySummarySelect } from 'src/competition-category/competition-category.select';

export const climberSummarySelect = {
  id: true,
  firstName: true,
  lastName: true,
  age: true,
  gender: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.ClimberSelect;

export const climberSelect = {
  ...climberSummarySelect,
  competitionCategory: { select: competitionCategorySummarySelect },
} satisfies Prisma.ClimberSelect;
