import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateWallDto } from './dto/create-wall.dto';
import { UpdateWallDto } from './dto/update-wall.dto';
import { WallsService } from './walls.service';

@Controller('walls')
export class WallsController {
  constructor(private readonly wallsService: WallsService) {}

  @Post()
  create(@Body() createWallDto: CreateWallDto) {
    return this.wallsService.create(createWallDto);
  }

  @Get()
  findAll() {
    return this.wallsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wallsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWallDto: UpdateWallDto) {
    return this.wallsService.update(id, updateWallDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wallsService.remove(id);
  }
}
