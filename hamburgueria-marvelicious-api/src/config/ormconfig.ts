import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function getOrmConfig(): TypeOrmModuleOptions {
  return {
    type: 'sqlite',
    database: 'src/database/hamburgueria-db.sqlite3',
    synchronize: true,
    logging: false,
    entities: ['../entities/*.entity.ts'],
    autoLoadEntities: true,
  };
}
