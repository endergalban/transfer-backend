import { Transfer } from './entities/transfer.entity';

export const transfersProviders = [
  {
    provide: 'TRANSFERS_REPOSITORY',
    useValue: Transfer,
  },
];
