import { Body, Controller, Param, Put } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodoDto } from "./dtos/create-todo.dto";
import { Post ,Get } from "@nestjs/common";

@Controller('todos')
export class TodosController{
    constructor(private readonly todosService:TodosService){}
    @Post()
    create(@Body() dto:CreateTodoDto){
        return this.todosService.create(dto);
    }
  @Get()
  findAll(){
    return this.todosService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id:number){
    return this.todosService.findOne(id);
  }
  @Put()
  findOne(){
    
  }
}