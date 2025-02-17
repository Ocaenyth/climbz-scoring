import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClimberService } from './climber.service';
import { CreateClimberDto } from './dto/create-climber.dto';
import { UpdateClimberDto } from './dto/update-climber.dto';
import { ValidateZonesDto } from './dto/validate-zone.dto';

@Controller('climbers')
export class ClimberController {
  constructor(private readonly climberService: ClimberService) {}

  @Post()
  create(@Body() createClimberDto: CreateClimberDto) {
    return this.climberService.create(createClimberDto);
  }

  @Get()
  findAll() {
    return this.climberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.climberService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClimberDto: UpdateClimberDto) {
    return this.climberService.update(id, updateClimberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.climberService.remove(id);
  }

  @Post(':id/validateZones')
  validateZones(
    @Param('id') id: string,
    @Body() validateZonesDto: ValidateZonesDto,
  ) {
    return this.climberService.validateZones(id, validateZonesDto);
  }
}
