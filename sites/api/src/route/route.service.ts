import { Injectable } from '@nestjs/common';
import { prisma } from 'src/prisma/client';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Injectable()
export class RouteService {
  create(createRouteDto: CreateRouteDto) {
    return prisma.route.create({ data: createRouteDto });
  }

  findAll() {
    return prisma.route.findMany();
  }

  findOne(id: string) {
    return prisma.route.findFirst({ where: { id } });
  }

  update(id: string, updateRouteDto: UpdateRouteDto) {
    return prisma.route.update({ where: { id }, data: updateRouteDto });
  }

  remove(id: string) {
    return prisma.route.delete({ where: { id } });
  }
}
