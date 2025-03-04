import { HttpException, HttpStatus, Injectable, NotFoundException, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "./todos.entity";
import { Repository } from "typeorm";
import { CreateTodoDto } from "./dtos/create-todo.dto";
import { UpdateTodoDto } from "./dtos/update-todo.dto";
@Injectable()
export class TodosService{
  create(dto: CreateTodoDto): Todo | PromiseLike<Todo> {
    throw new Error("Method not implemented.");
  }
    userRepository: Repository<Todo>;
    constructor(@InjectRepository(Todo) private readonly todoRepository:Repository<Todo>,){}

    async createUser(dto:CreateTodoDto ):Promise<Todo>{
           const todo =this.todoRepository.create(dto)
           return this.userRepository.save(todo);

    }
    //Get all user
    async findAll():Promise<Todo[]>{
        return this.todoRepository.find();
    }

     //get one user
    async findOne(id:number):Promise<Todo>{
        const todo= await this.todoRepository.findOne({where:{id}});
        if(!todo){
            throw new HttpException(`Todo with ID ${id} not found`,HttpStatus.NOT_FOUND);
        }
        return todo;
    }
     //update user
     async update(id:number,dto:UpdateTodoDto):Promise<Todo>{
        const todo=await this.todoRepository.findOne({where:{id}});
        if(!todo){
            console.log(todo)
            throw new NotFoundException(`person with this ID ${id} not found`);
        }
        if(dto.name){
            todo.name=dto.name;
        }
        if(dto.email){
            todo.email=dto.email
        }
        if(dto.age){
            todo.age=dto.age
        }
        await this.todoRepository.save(todo);
        return todo;
     }
   //remove user
   async remove(id:number):Promise<void>{
        const todo=this.todoRepository.findOne({where:{id}});
        if(!todo){
            throw new NotFoundException(`You can't delete already unexisting user with this ID ${id}  `)
        }
        await this.todoRepository.delete(id);

    }
}
