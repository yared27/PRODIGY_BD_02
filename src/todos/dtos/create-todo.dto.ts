import { IsString, IsEmail, Min, IsInt } from 'class-validator';
export class CreateTodoDto{
    @IsString()
    name:string
    @IsEmail()
    email:string
    @IsInt()
    @Min(18)
    age:number
} 
