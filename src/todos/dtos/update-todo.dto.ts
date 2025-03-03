import { IsOptional, IsString } from "class-validator";
export class UpdateTodoDto{
@IsString()
@IsOptional()
name?:string;
@IsString()
@IsOptional()
email?:string;
@IsString()
@IsOptional()
age?:number;
}