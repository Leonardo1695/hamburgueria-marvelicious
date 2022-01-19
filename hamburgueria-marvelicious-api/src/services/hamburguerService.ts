import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Hamburguer } from 'src/entities/hamburguerEntity'
import { HamburguerRepository } from 'src/repositories/hamburguerRepository'

@Injectable()
export class HamburguerService {
  constructor(private readonly repository: HamburguerRepository) {}

  async gethamburguer() {
    const data = await this.repository.find();
    return data;
  }

  async getHamburguer(id: number) {
    const data = await this.repository.findOne({ where: { id } });
    return data;
  }

  async createHamburguer(hamburguer: Hamburguer) {
    if (!hamburguer) {
      throw new BadRequestException('hamburguer to persist not send');
    }

    const hamburguerCreated = await this.repository.create(hamburguer);
    const hamburguerSaved = await this.repository.save(hamburguerCreated);

    return hamburguerSaved;
  }

  async updateHamburguer(id: number, hamburguer: Hamburguer) {
    if (!hamburguer) {
      throw new BadRequestException('hamburguer to persist not send');
    }

    const hamburguerSaved = await this.repository.findOne({ where: { id } });

    console.log(hamburguerSaved);

    if (!hamburguerSaved) {
      throw new NotFoundException("hamburguer doesn't exists");
    }

    const hamburguerUpdated = await this.repository.save(hamburguerSaved);

    return hamburguerUpdated;
  }

  async deletehamburguer(id: number) {
    const hamburguerSaved = await this.repository.findOne({ where: { id } });

    if (!hamburguerSaved) {
      throw new NotFoundException("hamburguer doesn't exists");
    }

    await this.repository.delete(hamburguerSaved);

    return;
  }
}
