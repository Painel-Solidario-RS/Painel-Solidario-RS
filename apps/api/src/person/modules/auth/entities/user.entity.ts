import { Person } from 'src/person/entities/person.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: string;

  @OneToOne(() => Person)
  @JoinColumn()
  public person: Person;

  @Column()
  public password: string;

  @Column({ default: 'ad207dcc1877dba2cdea4aa0d40888b3' }) // TODO(Perin): Remove this default value.
  public passwordSalt: string;
}
