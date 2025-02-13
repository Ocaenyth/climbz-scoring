import { Module } from '@nestjs/common';
import { CompetitionCategoryController } from './competition-category.controller';
import { CompetitionCategoryService } from './competition-category.service';

@Module({
  controllers: [CompetitionCategoryController],
  providers: [CompetitionCategoryService],
})
export class CompetitionCategoryModule {}
