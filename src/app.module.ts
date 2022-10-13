import { Module } from '@nestjs/common';
import { TransferModule } from './transfer/transfer.module';
import { ReceiverModule } from './receiver/receiver.module';
import { AppController } from './app.controller';

@Module({
  imports: [TransferModule, ReceiverModule],
  controllers: [AppController],
})
export class AppModule {}
