import { Injectable } from '@nestjs/common';
import { prisma } from 'src/prisma/client';
import { ZoneService } from 'src/zone/zone.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { RouteDto } from './route.dto';
import { routeSelect } from './route.select';

@Injectable()
export class RouteService {
  constructor(private readonly zoneService: ZoneService) {}

  async create(createRouteDto: CreateRouteDto) {
    const route: RouteDto = await prisma.route.create({
      select: routeSelect,
      data: { name: createRouteDto.name, wallId: createRouteDto.wallId },
    });
    for (let i = 1; i <= createRouteDto.zoneCount; i++) {
      console.log(i);
      await this.zoneService.create({
        number: i,
        routeId: route.id.toString(),
      });
    }
    return this.findOne(route.id.toString());
  }

  findAll() {
    return prisma.route.findMany({
      select: routeSelect,
      orderBy: [{ wall: { number: 'asc' } }, { name: 'asc' }, { id: 'asc' }],
    });
  }

  findOne(id: string) {
    return prisma.route.findFirst({ select: routeSelect, where: { id } });
  }

  update(id: string, updateRouteDto: UpdateRouteDto) {
    return prisma.route.update({
      select: routeSelect,
      where: { id },
      data: updateRouteDto,
    });
  }

  remove(id: string) {
    return prisma.route.delete({ select: routeSelect, where: { id } });
  }
}
