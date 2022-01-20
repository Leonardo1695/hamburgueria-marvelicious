import { AppController, AlienController } from './controllers';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getOrmConfig } from './config';
import { AlienRepository } from './repositories/alien.repository';
import { AlienService, AppService } from './services';

@Module({
  imports: [
    TypeOrmModule.forRoot(getOrmConfig()),
    TypeOrmModule.forFeature([AlienRepository]),
  ],
  controllers: [AppController, AlienController],
  providers: [AppService, AlienService],
})
export class AppModule {}
