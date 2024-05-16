import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Tabela de necessidades
 */
@Entity()
export class Need {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  description: string;
}
