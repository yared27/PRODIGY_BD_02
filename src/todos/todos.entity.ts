// import { Entity, , Column } from 'typeorm';
const {Entity}=require('typeorm')
const {PrimaryGeneratedColumn}=require('typeorm')
const {Column}=require('typeorm')
@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number=0; // Definite assignment assertion

  @Column()
  name: string=""; // Definite assignment assertion

  @Column()
  email: string=''; // Definite assignment assertion

  @Column()
  age: number=0; // Definite assignment assertion
}