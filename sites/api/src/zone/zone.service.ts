import { Injectable } from '@nestjs/common';
import { prisma } from 'src/prisma/client';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';

@Injectable()
export class ZoneService {
  create(createZoneDto: CreateZoneDto) {
    return prisma.zone.create({ data: createZoneDto });
  }

  findAll() {
    return prisma.zone.findMany({
      orderBy: [
        { route: { wall: { number: 'asc' } } },
        { number: 'asc' },
        { id: 'asc' },
      ],
    });
  }

  findOne(id: string) {
    return prisma.zone.findFirst({ where: { id } });
  }

  update(id: string, updateZoneDto: UpdateZoneDto) {
    return prisma.zone.update({ where: { id }, data: updateZoneDto });
  }

  remove(id: string) {
    return prisma.zone.delete({ where: { id } });
  }
}
