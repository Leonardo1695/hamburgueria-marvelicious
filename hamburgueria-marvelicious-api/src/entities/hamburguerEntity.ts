import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Hamburguer')
export class Hamburguer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: number;

  @Column()
  picture: string;
}
