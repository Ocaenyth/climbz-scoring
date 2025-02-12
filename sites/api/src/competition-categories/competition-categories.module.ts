import { Module } from '@nestjs/common';
import { CompetitionCategoriesService } from './competition-categories.service';
import { CompetitionCategoriesController } from './competition-categories.controller';

@Module({
  controllers: [CompetitionCategoriesController],
  providers: [CompetitionCategoriesService],
})
export class CompetitionCategoriesModule {}
