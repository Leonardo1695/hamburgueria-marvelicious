import { AlienController } from './controllers/alien.controller';
import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getOrmConfig } from './config';
import { AlienService } from './services/alien.service';
import { AlienRepository } from './repositories/alien.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(getOrmConfig()),
    TypeOrmModule.forFeature([AlienRepository]),
  ],
  controllers: [AppController, AlienController],
  providers: [AppService, AlienService],
})
export class AppModule {}
