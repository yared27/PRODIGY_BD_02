"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
// Load environment variables from .env file
(0, dotenv_1.config)();
// Create a new ConfigService instance
const configService = new config_1.ConfigService();
// Export the DataSource object using CommonJS syntax
module.exports = new typeorm_1.DataSource({
    type: 'mysql', // Database type
    host: configService.get('DB_HOST'), // Database host
    port: configService.get('DB_PORT'), // Database port
    username: configService.get('DB_USERNAME'), // Database username
    password: configService.get('DB_PASSWORD'), // Database password
    database: configService.get('DB_NAME'), // Database name
    entities: ['dist/**/*.entity.js'], // Path to your entity files
    migrations: ['dist/migrations/*.js'], // Path to your migration files
    synchronize: false, // Disable synchronize (use migrations instead)
});
//# sourceMappingURL=data-source.js.map