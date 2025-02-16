import { Prisma } from '@prisma/client';
import { climberSummarySelect } from 'src/climber/climber.select';

export const competitionCategorySummarySelect = {
  id: true,
  name: true,
  minAge: true,
  maxAge: true,
  gender: true,
} satisfies Prisma.CompetitionCategorySelect;

export const competitionCategorySelect = {
  ...competitionCategorySummarySelect,
  climbers: { select: climberSummarySelect },
} satisfies Prisma.CompetitionCategorySelect;
