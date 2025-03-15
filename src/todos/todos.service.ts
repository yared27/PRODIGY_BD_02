import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todos.entity';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  // Create a new todo
  async create(dto: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(dto);
    return this.todoRepository.save(todo);
  }

  // Get all todos
  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  // Get one todo by ID
  async findOne(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOne({ where: { id } });
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  // Update a todo by ID
  async update(id: number, dto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.todoRepository.findOne({ where: { id } });
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    // Update fields if provided in the DTO
    if (dto.name) {
      todo.name = dto.name;
    }
    if (dto.email) {
      todo.email = dto.email;
    }
    if (dto.age) {
      todo.age = dto.age;
    }

    await this.todoRepository.save(todo);
    return todo;
  }

  // Delete a todo by ID
  async remove(id: number): Promise<void> {
    const todo = await this.todoRepository.findOne({ where: { id } });
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    await this.todoRepository.delete(id);
  }
}