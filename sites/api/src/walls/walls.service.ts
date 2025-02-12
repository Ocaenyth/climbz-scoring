import { Injectable } from '@nestjs/common';
import { prisma } from 'src/prisma/client';
import { CreateWallDto } from './dto/create-wall.dto';
import { UpdateWallDto } from './dto/update-wall.dto';
import { wallsSelect } from './walls.select';

@Injectable()
export class WallsService {
  create(createWallDto: CreateWallDto) {
    return prisma.wall.create({ select: wallsSelect, data: createWallDto });
  }

  findAll() {
    return prisma.wall.findMany({
      select: wallsSelect,
      orderBy: { number: 'asc' },
    });
  }

  findOne(id: string) {
    return prisma.wall.findUniqueOrThrow({
      select: wallsSelect,
      where: { id },
    });
  }

  update(id: string, updateWallDto: UpdateWallDto) {
    return prisma.wall.update({
      select: wallsSelect,
      where: { id },
      data: updateWallDto,
    });
  }

  remove(id: string) {
    return prisma.wall.delete({ select: wallsSelect, where: { id } });
  }
}
