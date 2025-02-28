import { ClimberDto } from 'src/climber/dto/climber.dto';

export interface CompetitionCategoryResult {
  climber: ClimberDto;
  rank?: number;
  score: number;
}
