import { HttpStatus, Injectable } from '@nestjs/common';
import { response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProjectDto: CreateProjectDto) {
    const data: any = {
      ...createProjectDto,
    };
    const createProject = await this.prisma.project.create({ data });
    return createProject;
  }

  async findAll() {
    const projects = await this.prisma.project.findMany({
      include: {
        members: true,
      },
    });

    return projects;
  }

  async findOne(id: number) {
    const projectUnique = await this.prisma.project.findUnique({
      where: { id: Number(id) },
      include: {
        members: true,
      },
    });
    return projectUnique;
  }

  async delete(id: number) {
    await this.prisma.project.delete({
      where: { id: Number(id) },
    });
    return response.status(HttpStatus.OK);
  }
}
