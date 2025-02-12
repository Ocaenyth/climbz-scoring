import { Injectable } from '@nestjs/common';

@Injectable()
export class StatsService {
  //   computeScores() {
  //     const climbers: Prisma.ClimberSelect[] = [];
  //     const routes: Prisma.RouteSelect[] = [];
  //     let climberIdToScore = new Map<string, number>();
  //     //  For each route
  //     routes.forEach((route) => {
  //       const zones: Prisma.ZoneSelect[] = [];
  //       // FIXME: Use this line when correct typing
  //       //   route.zones.forEach((zone) => {
  //       // For each zone
  //       zones.forEach((zone) => {
  //         // Compute zone score (total / success)
  //         const TOTAL_SCORE_BY_ZONE = 1000;
  //         const totalSuccesses = zone.users.length;
  //         const scorePerClimber = TOTAL_SCORE_BY_ZONE / totalSuccesses;
  //         // Assign score to each climber
  //         const currentScore = climberIdToScore.get(climberId) || 0;
  //         climberIdToScore.set(climberId, currentScore + score);
  //       });
  //     });
  //   }
}

function addScore(
  climberIdToScore: Map<string, number>,
  climberId: string,
  score: number,
) {
  const currentScore = climberIdToScore.get(climberId) || 0;
  climberIdToScore.set(climberId, currentScore + score);
}
