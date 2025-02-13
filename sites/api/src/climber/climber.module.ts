import { Module } from '@nestjs/common';
import { ClimberController } from './climber.controller';
import { ClimberService } from './climber.service';

@Module({
  controllers: [ClimberController],
  providers: [ClimberService],
})
export class ClimberModule {}
