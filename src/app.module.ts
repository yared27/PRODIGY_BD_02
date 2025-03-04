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
  imports: [ ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(configService:ConfigService)=>({
      type: 'mysql',
      host: configService.get<string>('HOST'),
      port: configService.get<number>('PORT'),
      username: configService.get<string>('USERNAME'), 
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_NAME'), 
      entities: [join(process.cwd(),'dist/**/*.entity.js') ],
      synchronize: false, 
      migrations:['dist/migrations/*.js'],
      migrationsRun:true,
    }),

  }),
  TodosModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
