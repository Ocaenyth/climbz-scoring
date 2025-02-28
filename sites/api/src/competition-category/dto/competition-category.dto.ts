import { Prisma } from '@prisma/client';
import { competitionCategorySelect } from '../competition-category.select';

export type CompetitionCategoryDto = Prisma.CompetitionCategoryGetPayload<{
  select: typeof competitionCategorySelect;
}>;
