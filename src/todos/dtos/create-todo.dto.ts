// import { IsString, IsEmail, Min, IsInt } from 'class-validator';
const {IsString}=require('class-validator')
const {IsEmail}=require('class-validator')
const {Min}=require('class-validator')
const {IsInt}=require('class-validator')
export class CreateTodoDto {
  @IsString()
  name: string=''; // Definite assignment assertion

  @IsEmail()
  email: string=''; // Definite assignment assertion

  @IsInt()
  @Min(18)
  age: number=0; // Definite assignment assertion
}