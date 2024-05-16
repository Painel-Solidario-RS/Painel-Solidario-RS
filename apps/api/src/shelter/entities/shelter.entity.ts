import { Address } from 'src/address/entities/address.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * Tabela de abrigos
 */
@Entity()
export class Shelter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  contact: string;

  @Column({ nullable: true })
  type: ShelterType;

  @Column({ nullable: true })
  capacity: number;

  @OneToOne(() => Address, (address) => address.shelter, { nullable: true })
  @JoinColumn()
  address: Address;
}

export enum ShelterType {
  PERSON,
  PET,
}
