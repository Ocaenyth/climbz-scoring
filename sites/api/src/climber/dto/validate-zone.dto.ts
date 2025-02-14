import { IsInt, IsUUID, Min } from 'class-validator';

export class ValidateZonesDto {
  @IsUUID()
  routeId: string;

  @IsInt()
  @Min(0)
  maxZone: number;
}
