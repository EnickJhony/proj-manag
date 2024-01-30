import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProjectModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
