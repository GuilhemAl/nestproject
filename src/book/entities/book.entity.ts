import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Length } from 'class-validator';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(1, 20)
  title: string;

  @Column()
  @Length(1, 20)
  author: string;
}
