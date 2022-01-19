import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('aliens')
export class Alien {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: number;

  @Column()
  picture: string;
}
