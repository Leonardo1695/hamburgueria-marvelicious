import { Hamburguer } from 'src/entities/hamburguerEntity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Hamburguer)
export class HamburguerRepository extends Repository<Hamburguer>{}
