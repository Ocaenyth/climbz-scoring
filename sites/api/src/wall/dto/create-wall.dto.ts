import { IsInt } from 'class-validator';

export class CreateWallDto {
  @IsInt()
  number: number;
}
