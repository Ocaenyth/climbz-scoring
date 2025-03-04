import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Gender } from '@prisma/client';
import { CompetitionCategoryService } from './competition-category.service';
import { CreateCompetitionCategoryDto } from './dto/create-competition-category.dto';
import { ScratchCategory } from './dto/scratch-category.enum';
import { UpdateCompetitionCategoryDto } from './dto/update-competition-category.dto';

@Controller('competition-categories')
export class CompetitionCategoryController {
  constructor(
    private readonly competitionCategoryService: CompetitionCategoryService,
  ) {}

  @Post()
  create(@Body() createCompetitionCategoryDto: CreateCompetitionCategoryDto) {
    return this.competitionCategoryService.create(createCompetitionCategoryDto);
  }

  @Get()
  findAll() {
    return this.competitionCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.competitionCategoryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompetitionCategoryDto: UpdateCompetitionCategoryDto,
  ) {
    return this.competitionCategoryService.update(
      id,
      updateCompetitionCategoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.competitionCategoryService.remove(id);
  }

  @Get(':id/results')
  computeCategoryResults(@Param('id') id: string) {
    return this.competitionCategoryService.computeCategoryResults(id);
  }

  @Get('scratch/:scratchCategory/:gender/results')
  computeScratchResults(
    @Param('scratchCategory') scratchCategory: ScratchCategory,
    @Param('gender') gender: Gender,
  ) {
    return this.competitionCategoryService.computeScratchResults(
      scratchCategory,
      gender,
    );
  }
}
