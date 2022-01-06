import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Alien } from 'src/entities/alien.entity';
import { AlienRepository } from 'src/repositories/alien.repository';

@Injectable()
export class AlienService {
  constructor(private readonly repository: AlienRepository) {}

  async getAliens() {
    const data = await this.repository.find();
    return data;
  }

  async createAlien(alien: Alien) {
    if (!alien) {
      throw new BadRequestException('alien to persist not send');
    }

    const alienCreated = await this.repository.create(alien);
    const alienSaved = await this.repository.save(alienCreated);

    return alienSaved;
  }

  async updateAlien(id: number, alien: Alien) {
    if (!alien) {
      throw new BadRequestException('alien to persist not send');
    }

    const alienSaved = await this.repository.findOne({ where: { id } });

    console.log(alienSaved);

    if (!alienSaved) {
      throw new NotFoundException("alien doesn't exists");
    }

    const alienUpdated = await this.repository.save(alienSaved);

    return alienUpdated;
  }

  async deleteAlien(id: number) {
    const alienSaved = await this.repository.findOne({ where: { id } });

    if (!alienSaved) {
      throw new NotFoundException("alien doesn't exists");
    }

    await this.repository.delete(alienSaved);

    return;
  }
}
