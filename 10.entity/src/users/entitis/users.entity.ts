import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  password: string;

  @Column()
  age: number;

  @Column('json', { nullable: true })
  family: string[];
}
