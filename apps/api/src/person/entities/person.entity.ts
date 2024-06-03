import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ example: 1, description: 'ID da pessoa' })
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({
    example: 'João da Silva',
    description: 'Nome',
  })
  name: string;

  @Column()
  @ApiProperty({
    example: 'pessoa@mail.com',
    description: 'E-mail',
  })
  email: string;

  @Column()
  @ApiProperty({
    example: '(51) 99999-9999',
    description: 'Telefone',
  })
  phone: string;

  @Column()
  @ApiProperty({
    example: false,
    description: 'Se a pessoa já está alocada',
  })
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
