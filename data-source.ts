const {DataSource} =require('typeorm');
// import { DataSource } from 'typeorm';
const {ConfigService}=require('@nestjs/config')
// import { ConfigService } from '@nestjs/config';
const {config}=require('dotenv');
// Load environment variables from .env file
config();

// Create a new ConfigService instance
const configService = new ConfigService();

// Export the DataSource object using CommonJS syntax
module.exports = new DataSource({
  type: 'mysql', // Database type
  host: configService.get('DB_HOST'), // Database host
  port: configService.get('DB_PORT'), // Database port
  username: configService.get('DB_USERNAME'), // Database username
  password: configService.get('DB_PASSWORD'), // Database password
  database: configService.get('DB_NAME'), // Database name
  entities: ['dist/**/*.entity.js'], // Path to your entity files
  migrations: ['dist/migrations/*.js'], // Path to your migration files
  synchronize: false, // Disable synchronize (use migrations instead)
  logging: true, // Enable SQL logging for debugging
});