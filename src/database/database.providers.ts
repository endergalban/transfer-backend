import { Sequelize } from 'sequelize-typescript';
import { Transfer } from '../transfer/entities/transfer.entity';
import { Receiver } from '../receiver/entities/receiver.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([Transfer, Receiver]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
