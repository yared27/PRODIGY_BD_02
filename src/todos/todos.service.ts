import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "./todos.entity";
import { Repository } from "typeorm";
import { CreateTodoDto } from "./dtos/create-todo.dto";
@Injectable()
export class TodosService{
    // constructor(@InjectRepository(Todo) private readonly todoRepository:Repository<Todo>,){}
    private todos=new Map<number,{name:string;email:string;age:number}>();
    private idCounter=1;
    create(dto:CreateTodoDto){
        this.todos.set(this.idCounter,{name:dto.name,email:dto.email,age:dto.age});
        return {id:this.idCounter++,...dto};
    }
    findAll(){
        return Array.from(this.todos.entries()).map(([id,todo])=>({id,...todo}));
    }
    findOne(id:number){
        const todo=this.todos.get(id);
        if(!todo){
            throw new HttpException(`Todo with ID ${id} not found`,HttpStatus.NOT_FOUND);
        }
        return {id,...todo};
    }
}
