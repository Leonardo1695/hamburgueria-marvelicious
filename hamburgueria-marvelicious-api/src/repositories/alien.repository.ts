import { Alien } from 'src/entities/alien.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Alien)
export class AlienRepository extends Repository<Alien> {}
