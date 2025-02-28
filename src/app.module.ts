import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm' ;
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'process';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'crud_app', // Change this to your MySQL username
      password: 'Yared(2723)', // Change this to your MySQL password
      database: 'crud_app', // Change this to your database name
      autoLoadEntities: true,
      synchronize: true, // S
        

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
