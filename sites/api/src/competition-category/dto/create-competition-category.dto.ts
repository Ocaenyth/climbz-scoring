import { Gender } from '@prisma/client';
import { IsEnum, IsInt, IsString } from 'class-validator';

export class CreateCompetitionCategoryDto {
  @IsString()
  name: string;

  @IsInt()
  minAge: number;

  @IsInt()
  maxAge: number;

  @IsEnum(Gender)
  gender: Gender;
}
