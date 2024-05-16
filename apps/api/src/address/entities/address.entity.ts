import { Person } from 'src/person/entities/person.entity';
import { Shelter } from 'src/shelter/entities/shelter.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Tabela genérica de endereços (Pessoa, Abrigo)
 */
@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  cep: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  neighborhood: string;

  @Column({ nullable: true })
  number: string;

  @Column({ nullable: true })
  complement: string;

  @OneToOne(() => Person, (person) => person.address, { nullable: true })
  person?: Person;

  @OneToOne(() => Shelter, (shelter) => shelter.address, { nullable: true })
  shelter?: Shelter;
}
