import { HamburguerController } from './controllers/hamburguerController'
import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getOrmConfig } from './config';
import { HamburguerService } from './services/hamburguerService';
import { HamburguerRepository } from './repositories/hamburguerRepository';

@Module({
  imports: [
    TypeOrmModule.forRoot(getOrmConfig()),
    TypeOrmModule.forFeature([HamburguerRepository]),
  ],
  controllers: [AppController, HamburguerController],
  providers: [AppService, HamburguerService],
})
export class AppModule {}
