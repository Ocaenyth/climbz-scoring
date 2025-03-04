import { Injectable } from '@nestjs/common';
import { Gender } from '@prisma/client';
import { climberSelect } from 'src/climber/climber.select';
import { ClimberDto } from 'src/climber/dto/climber.dto';
import { prisma } from 'src/prisma/client';
import { RouteDto } from 'src/route/dto/route.dto';
import { routeSelect } from 'src/route/route.select';
import { CompetitionCategoryResult } from './dto/competition-category-result.dto';
import { CreateCompetitionCategoryDto } from './dto/create-competition-category.dto';
import { ScratchCategory } from './dto/scratch-category.enum';
import { UpdateCompetitionCategoryDto } from './dto/update-competition-category.dto';

const TOTAL_POINTS_PER_ZONE = 1000;

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

  async computeCategoryResults(competitionCategoryId: string) {
    return this.computeResults(
      await prisma.climber.findMany({
        where: { competitionCategoryId },
        select: climberSelect,
      }),
    );
  }

  async computeScratchResults(
    scratchCategory: ScratchCategory,
    gender: Gender,
  ) {
    let ageComparison = null;
    switch (scratchCategory) {
      case ScratchCategory.YOUNG:
        ageComparison = { competitionCategory: { maxAge: { lt: 18 } } };
        break;
      case ScratchCategory.ADULT:
        ageComparison = { competitionCategory: { maxAge: { gte: 18 } } };
        break;
    }

    return this.computeResults(
      await prisma.climber.findMany({
        where: { ...ageComparison, gender },
        select: climberSelect,
      }),
    );
  }

  async computeResults(climbers: ClimberDto[]) {
    const routes: RouteDto[] = await prisma.route.findMany({
      select: routeSelect,
    });
    const climberIdToScore = new Map<string, number>();

    routes.forEach((route) => {
      // Start at 1 because 0 means there have been no zone validated for this route
      for (let i = 1; i <= route.zoneCount; i++) {
        const successfulClimbers = climbers.filter((climber) => {
          const name = `${climber.firstName} ${climber.lastName}`;
          const currentZone = climber.successfulZones.find((successfulZone) => {
            return successfulZone.route.id == route.id;
          });

          if (currentZone == undefined) return false;

          return i <= currentZone.maxSuccessfulZone;
        });
        // If no climbers passed this zone, skip to next route
        if (successfulClimbers.length == 0) {
          break;
        }
        // Compute current zone score based on how many climbers validated it
        const pointsPerClimber = Math.floor(
          TOTAL_POINTS_PER_ZONE / successfulClimbers.length,
        );

        // Attribute equal score to each climber that validated the zone
        successfulClimbers.forEach(({ id: climberId }) => {
          addScore(climberIdToScore, climberId, pointsPerClimber);
        });
      }
    });

    const results: CompetitionCategoryResult[] = [];
    for (let [climberId, score] of climberIdToScore) {
      results.push({
        climber: climbers.find((climber) => climber.id == climberId),
        score: score,
      });
    }
    results.sort((a, b) => b.score - a.score);
    let currentRank = 0;
    let previousScore = 0;
    results.forEach((result, i) => {
      if (result.score != previousScore) {
        previousScore = result.score;
        currentRank = i + 1;
      }
      result.rank = currentRank;
    });
    return results;
  }
}

function addScore(
  climberIdToScore: Map<string, number>,
  climberId: string,
  score: number,
) {
  const currentScore = climberIdToScore.get(climberId) || 0;
  climberIdToScore.set(climberId, currentScore + score);
}
