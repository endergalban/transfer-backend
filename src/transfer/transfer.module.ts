import { Module } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { TransferController } from './transfer.controller';
import { transfersProviders } from './transfers.provider';
import { DatabaseModule } from '../database/database-module';
import { ReceiverService } from 'src/receiver/receiver.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TransferController],
  providers: [TransferService, ...transfersProviders, ReceiverService],
})
export class TransferModule {}
