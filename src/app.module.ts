import { Module } from '@nestjs/common';
import { TransferModule } from './transfer/transfer.module';
import { ReceiverModule } from './receiver/receiver.module';

@Module({
  imports: [TransferModule, ReceiverModule],
})
export class AppModule {}
