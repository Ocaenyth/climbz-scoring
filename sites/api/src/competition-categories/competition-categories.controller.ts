import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CompetitionCategoriesService } from './competition-categories.service';
import { CreateCompetitionCategoryDto } from './dto/create-competition-category.dto';
import { UpdateCompetitionCategoryDto } from './dto/update-competition-category.dto';

@Controller('competition-categories')
export class CompetitionCategoriesController {
  constructor(
    private readonly competitionCategoriesService: CompetitionCategoriesService,
  ) {}

  @Post()
  create(@Body() createCompetitionCategoryDto: CreateCompetitionCategoryDto) {
    return this.competitionCategoriesService.create(
      createCompetitionCategoryDto,
    );
  }

  @Get()
  findAll() {
    return this.competitionCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.competitionCategoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompetitionCategoryDto: UpdateCompetitionCategoryDto,
  ) {
    return this.competitionCategoriesService.update(
      id,
      updateCompetitionCategoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.competitionCategoriesService.remove(id);
  }
}
