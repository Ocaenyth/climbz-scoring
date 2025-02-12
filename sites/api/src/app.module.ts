import { Module } from '@nestjs/common';
import { ClimbersModule } from './climbers/climbers.module';
import { CompetitionCategoriesModule } from './competition-categories/competition-categories.module';
import { RoutesModule } from './routes/routes.module';
import { WallsModule } from './walls/walls.module';
import { ZonesModule } from './zones/zones.module';
import { StatsController } from './stats/stats.controller';
import { StatsService } from './stats/stats.service';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [
    ZonesModule,
    RoutesModule,
    CompetitionCategoriesModule,
    WallsModule,
    ClimbersModule,
    StatsModule,
  ],
  controllers: [StatsController],
  providers: [StatsService],
})
export class AppModule {}
