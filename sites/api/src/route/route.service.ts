import { Injectable } from '@nestjs/common';
import { prisma } from 'src/prisma/client';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { routeSelect } from './route.select';

@Injectable()
export class RouteService {
  create(createRouteDto: CreateRouteDto) {
    return prisma.route.create({ select: routeSelect, data: createRouteDto });
  }

  findAll() {
    return prisma.route.findMany({ select: routeSelect });
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
