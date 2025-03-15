import { IsInt, IsString, IsUUID } from 'class-validator';

export class CreateRouteDto {
  @IsString()
  name: string;

  @IsInt()
  displayOrder: number;

  @IsUUID()
  wallId: string;

  @IsInt()
  zoneCount: number;
}
