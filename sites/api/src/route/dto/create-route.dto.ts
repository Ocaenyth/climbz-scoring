import { IsString, IsUUID } from 'class-validator';

export class CreateRouteDto {
  @IsString()
  name: string;

  @IsUUID()
  wallId: string;
}
