import { Body, Controller, NotFoundException, Param, Put } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodoDto } from "./dtos/create-todo.dto";
import { Post ,Get,Delete } from "@nestjs/common";
import { UpdateTodoDto } from "./dtos/update-todo.dto";
import { Todo } from "./todos.entity";
@Controller('todos')
export class TodosController{
    constructor(private readonly todosService:TodosService){}
    @Post()
   async create(@Body() dto:CreateTodoDto):Promise<Todo>{
        return this.todosService.create(dto);
    }
  @Get()
  async findAll():Promise<Todo[]>{
    return this.todosService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id:string):Promise<Todo>{
    return this.todosService.findOne(parseInt(id));
    
  }
  @Put(':id')
 async update(@Param('id') id:string,@Body() dto:UpdateTodoDto):Promise<Todo>{
     return this.todosService.update(parseInt(id),dto);
  }
  @Delete(':id')
 async remove(@Param('id')id:string):Promise<void>{
    return this.todosService.remove(parseInt(id))

  }

}