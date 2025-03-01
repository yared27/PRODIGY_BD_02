import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm' ;
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'process';
import { TodosModule } from './todos/todos.module';
import { Todo } from './todos/todos.entity';
import { join } from 'path';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'crud_app', // Change this to your MySQL username
      password: 'Yared(2723)', // Change this to your MySQL password
      database: 'crud_app', // Change this to your database name
      entities: [join(process.cwd(),'dist/**/*.entity.js') ],
      synchronize: true, // S
        

  }),
  TodosModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
