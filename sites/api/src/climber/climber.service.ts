import { Injectable } from '@nestjs/common';
import { prisma } from 'src/prisma/client';
import { climberSelect } from './climber.select';
import { CreateClimberDto } from './dto/create-climber.dto';
import { UpdateClimberDto } from './dto/update-climber.dto';

@Injectable()
export class ClimberService {
  create(createClimberDto: CreateClimberDto) {
    return prisma.climber.create({
      select: climberSelect,
      data: createClimberDto,
    });
  }

  findAll() {
    return prisma.climber.findMany({
      select: climberSelect,
      orderBy: [{ age: 'asc' }, { firstName: 'asc' }, { id: 'asc' }],
    });
  }

  findOne(id: string) {
    return prisma.climber.findFirst({ select: climberSelect, where: { id } });
  }

  update(id: string, updateClimberDto: UpdateClimberDto) {
    return prisma.climber.update({
      select: climberSelect,
      where: { id },
      data: updateClimberDto,
    });
  }

  remove(id: string) {
    return prisma.climber.delete({ select: climberSelect, where: { id } });
  }
}
