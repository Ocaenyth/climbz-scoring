import { Injectable } from '@nestjs/common';
import { prisma } from 'src/prisma/client';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';
import { zoneSelect } from './zone.select';

@Injectable()
export class ZoneService {
  create(createZoneDto: CreateZoneDto) {
    return prisma.zone.create({ select: zoneSelect, data: createZoneDto });
  }

  findAll() {
    return prisma.zone.findMany({
      select: zoneSelect,
      orderBy: [
        { route: { wall: { number: 'asc' } } },
        { number: 'asc' },
        { id: 'asc' },
      ],
    });
  }

  findOne(id: string) {
    return prisma.zone.findFirst({ select: zoneSelect, where: { id } });
  }

  update(id: string, updateZoneDto: UpdateZoneDto) {
    return prisma.zone.update({
      select: zoneSelect,
      where: { id },
      data: updateZoneDto,
    });
  }

  remove(id: string) {
    return prisma.zone.delete({ select: zoneSelect, where: { id } });
  }
}
