import { Module } from '@nestjs/common';
import { ZoneService } from 'src/zone/zone.service';
import { RouteController } from './route.controller';
import { RouteService } from './route.service';

@Module({
  controllers: [RouteController],
  providers: [RouteService, ZoneService],
})
export class RouteModule {}
