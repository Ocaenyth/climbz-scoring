import { Module } from '@nestjs/common';
import { ClimbersService } from './climbers.service';
import { ClimbersController } from './climbers.controller';

@Module({
  controllers: [ClimbersController],
  providers: [ClimbersService],
})
export class ClimbersModule {}
