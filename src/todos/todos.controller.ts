import { Body, Controller, Param, Put } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodoDto } from "./dtos/create-todo.dto";
import { Post ,Get,Delete } from "@nestjs/common";
import { UpdateTodoDto } from "./dtos/update-todo.dto";
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
  findOne(@Param('id') id:string){
    return this.todosService.findOne(parseInt(id));
  }
  @Put(':id')
  update(@Param('id') id:string,@Body() dto:UpdateTodoDto){

     return this.todosService.update(parseInt(id),dto);
  }
  @Delete(':id')
  delete(@Param('id')id:string){
    return this.todosService.delete(parseInt(id))

  }

}