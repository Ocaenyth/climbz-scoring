import { Module } from '@nestjs/common';
import { ClimberModule } from './climber/climber.module';
import { CompetitionCategoryModule } from './competition-category/competition-category.module';
import { RouteModule } from './route/route.module';
import { StatsController } from './stats/stats.controller';
import { StatsModule } from './stats/stats.module';
import { StatsService } from './stats/stats.service';
import { WallModule } from './wall/wall.module';

@Module({
  imports: [
    RouteModule,
    CompetitionCategoryModule,
    WallModule,
    ClimberModule,
    StatsModule,
  ],
  controllers: [StatsController],
  providers: [StatsService],
})
export class AppModule {}
