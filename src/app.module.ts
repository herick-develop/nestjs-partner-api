import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { PrismaModule } from './prisma/prisma.module';
import { SpotModule } from './spot/spot.module';

@Module({
  imports: [EventsModule, PrismaModule, SpotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
