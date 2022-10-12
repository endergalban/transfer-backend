import { Module } from '@nestjs/common';
import { ReceiverService } from './receiver.service';
import { ReceiverController } from './receiver.controller';
import { receiversProviders } from './receivers.provider';
import { DatabaseModule } from '../database/database-module';

@Module({
  imports: [DatabaseModule],
  controllers: [ReceiverController],
  providers: [ReceiverService, ...receiversProviders],
})
export class ReceiverModule {}
