import { PartialType } from '@nestjs/mapped-types';
import { CreateCompetitionCategoryDto } from './create-competition-category.dto';

export class UpdateCompetitionCategoryDto extends PartialType(CreateCompetitionCategoryDto) {}
