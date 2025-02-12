import { Injectable } from '@nestjs/common';
import { prisma } from 'src/prisma/client';
import { climbersSelect } from './climbers.select';
import { CreateClimberDto } from './dto/create-climber.dto';
import { UpdateClimberDto } from './dto/update-climber.dto';

@Injectable()
export class ClimbersService {
  create(createClimberDto: CreateClimberDto) {
    return prisma.climber.create({
      select: climbersSelect,
      data: createClimberDto,
    });
  }

  findAll() {
    return prisma.climber.findMany({ select: climbersSelect });
  }

  findOne(id: string) {
    return prisma.climber.findFirst({ select: climbersSelect, where: { id } });
  }

  update(id: string, updateClimberDto: UpdateClimberDto) {
    return prisma.climber.update({
      select: climbersSelect,
      where: { id },
      data: updateClimberDto,
    });
  }

  remove(id: string) {
    return prisma.climber.delete({ select: climbersSelect, where: { id } });
  }
}
