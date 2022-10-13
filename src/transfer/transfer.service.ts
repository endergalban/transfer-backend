import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { Transfer } from './entities/transfer.entity';
import { Receiver } from '../receiver/entities/receiver.entity';
import { ReceiverService } from 'src/receiver/receiver.service';

@Injectable()
export class TransferService {
  constructor(
    @Inject('TRANSFERS_REPOSITORY')
    private transfersRepository: typeof Transfer,
    private receiverService: ReceiverService,
  ) {}

  async create(createTransferDto: CreateTransferDto) {
    const receiver = await this.receiverService.find(
      createTransferDto.receiverId,
    );
    if (!receiver) {
      throw new NotFoundException('receiverId not found');
    }
    return this.transfersRepository.create<Transfer>({
      receiverId: createTransferDto.receiverId,
      amount: createTransferDto.amount,
    });
  }

  async findAll(): Promise<Transfer[]> {
    return this.transfersRepository.findAll<Transfer>({
      include: [{ model: Receiver }],
    });
  }
}
