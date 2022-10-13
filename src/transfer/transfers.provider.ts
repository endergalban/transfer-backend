import { Transfer } from './entities/transfer.entity';
import { Receiver } from '../receiver/entities/receiver.entity';

export const transfersProviders = [
  {
    provide: 'TRANSFERS_REPOSITORY',
    useValue: Transfer,
  },
  {
    provide: 'RECEIVERS_REPOSITORY',
    useValue: Receiver,
  },
];
