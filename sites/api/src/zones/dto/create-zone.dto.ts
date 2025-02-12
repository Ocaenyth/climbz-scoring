import { IsInt, IsUUID } from 'class-validator';

export class CreateZoneDto {
  @IsInt()
  number: number;

  @IsUUID()
  routeId: string;
}
