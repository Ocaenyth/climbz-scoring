import { IsInt, IsString, IsUUID } from 'class-validator';

export class CreateRouteDto {
  @IsString()
  name: string;

  @IsUUID()
  wallId: string;

  @IsInt()
  zoneCount: number;
}
