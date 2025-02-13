import { Injectable } from '@nestjs/common';
import { prisma } from 'src/prisma/client';
import { CreateCompetitionCategoryDto } from './dto/create-competition-category.dto';
import { UpdateCompetitionCategoryDto } from './dto/update-competition-category.dto';

@Injectable()
export class CompetitionCategoryService {
  create(createCompetitionCategoryDto: CreateCompetitionCategoryDto) {
    return prisma.competitionCategory.create({
      data: createCompetitionCategoryDto,
    });
  }

  findAll() {
    return prisma.competitionCategory.findMany({
      orderBy: [{ minAge: 'asc' }, { name: 'asc' }, { id: 'asc' }],
    });
  }

  findOne(id: string) {
    return prisma.competitionCategory.findFirst({ where: { id } });
  }

  update(
    id: string,
    updateCompetitionCategoryDto: UpdateCompetitionCategoryDto,
  ) {
    return prisma.competitionCategory.update({
      where: { id },
      data: updateCompetitionCategoryDto,
    });
  }

  remove(id: string) {
    return prisma.competitionCategory.delete({ where: { id } });
  }
}
