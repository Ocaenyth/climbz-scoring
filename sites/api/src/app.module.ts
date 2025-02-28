import { Module } from '@nestjs/common';
import { ClimberModule } from './climber/climber.module';
import { CompetitionCategoryModule } from './competition-category/competition-category.module';
import { RouteModule } from './route/route.module';
import { WallModule } from './wall/wall.module';

@Module({
  imports: [RouteModule, CompetitionCategoryModule, WallModule, ClimberModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
