import { Receiver } from './entities/receiver.entity';

export const receiversProviders = [
  {
    provide: 'RECEIVERS_REPOSITORY',
    useValue: Receiver,
  },
];
