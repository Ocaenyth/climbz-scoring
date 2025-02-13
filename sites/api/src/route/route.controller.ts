import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { RouteService } from './route.service';

@Controller('routes')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.routeService.create(createRouteDto);
  }

  @Get()
  findAll() {
    return this.routeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
    return this.routeService.update(id, updateRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routeService.remove(id);
  }
}
