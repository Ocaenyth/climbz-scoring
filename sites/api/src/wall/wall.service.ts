import { Injectable } from '@nestjs/common';
import { prisma } from 'src/prisma/client';
import { CreateWallDto } from './dto/create-wall.dto';
import { UpdateWallDto } from './dto/update-wall.dto';
import { wallSelect } from './wall.select';

@Injectable()
export class WallService {
  create(createWallDto: CreateWallDto) {
    return prisma.wall.create({ select: wallSelect, data: createWallDto });
  }

  findAll() {
    return prisma.wall.findMany({
      select: wallSelect,
      orderBy: { number: 'asc' },
    });
  }

  findOne(id: string) {
    return prisma.wall.findUniqueOrThrow({
      select: wallSelect,
      where: { id },
    });
  }

  update(id: string, updateWallDto: UpdateWallDto) {
    return prisma.wall.update({
      select: wallSelect,
      where: { id },
      data: updateWallDto,
    });
  }

  remove(id: string) {
    return prisma.wall.delete({ select: wallSelect, where: { id } });
  }
}
