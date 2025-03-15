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
      useFactory: (configService: ConfigService) => {
        console.log('DB_HOST:', configService.get<string>('DB_HOST'));
        console.log('DB_PORT:', configService.get<number>('DB_PORT'));
        console.log('DB_USERNAME:', configService.get<string>('DB_USERNAME'));
        console.log('DB_PASSWORD:', configService.get<string>('DB_PASSWORD'));
        console.log('DB_NAME:', configService.get<string>('DB_NAME'));
      
        return {
          type: 'mysql',
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_NAME'),
          entities: [join(process.cwd(), 'dist/**/*.entity.js')],
          synchronize: false,
          migrations: ['dist/migrations/*.js'],
          migrationsRun: true,
        };
      },

  }),
  TodosModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
