import { Address } from 'src/address/entities/address.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * Profissão/Ocupação da pessoa
 */
@Entity()
export class PersonEmployment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cboCode: string;

  @Column()
  name: string;

  @OneToMany(() => Person, (person) => person.employment)
  people: Person[];
}
/**
 * Categorias de voluntário (voluntário civil, veterinário, saúde, etc.)
 */
@Entity()
export class VolunteerCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Person, (person) => person.categories)
  people: Person[];
}

/**
 * Atividades que a pessoa se dispõe a fazer (cozinhar, costurar, etc)
 */
@Entity()
export class PersonActivity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Person, (person) => person.activities)
  people: Person[];
}
/**
 *  Escala de turno disponível (manhã, tarde, noite, madrugada)
 */
@Entity()
export class PersonShifts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'time' })
  startDate: Date;

  @Column({ type: 'time' })
  endDate: Date;

  @ManyToMany(() => Person, (person) => person.shifts)
  people: Person[];
}

/**
 * Pessoa
 */
@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  allocated: boolean;

  @ManyToOne(() => PersonEmployment, (employment) => employment.people, {
    nullable: true,
  })
  employment?: PersonEmployment;

  @ManyToMany(() => VolunteerCategory, (category) => category.people)
  @JoinTable()
  categories: VolunteerCategory[];

  @ManyToMany(() => PersonActivity, (activities) => activities.people)
  @JoinTable()
  activities: PersonActivity[];

  @ManyToMany(() => PersonShifts, (shifts) => shifts.people)
  @JoinTable()
  shifts: PersonShifts[];

  @OneToOne(() => Address, (address) => address.person, { nullable: true })
  @JoinColumn()
  address: Address;
}
