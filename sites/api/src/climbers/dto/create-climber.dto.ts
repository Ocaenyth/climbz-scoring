import { Gender } from '@prisma/client';
import { IsEnum, IsInt, IsString } from 'class-validator';

export class CreateClimberDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsInt()
  age: number;

  @IsEnum(Gender)
  gender: Gender;
}
