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
import { WallService } from './wall.service';

@Controller('walls')
export class WallController {
  constructor(private readonly wallService: WallService) {}

  @Post()
  create(@Body() createWallDto: CreateWallDto) {
    return this.wallService.create(createWallDto);
  }

  @Get()
  findAll() {
    return this.wallService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wallService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWallDto: UpdateWallDto) {
    return this.wallService.update(id, updateWallDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wallService.remove(id);
  }
}
