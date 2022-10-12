import { Inject, Injectable } from '@nestjs/common';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { Transfer } from './entities/transfer.entity';
import { Receiver } from '../receiver/entities/receiver.entity';

@Injectable()
export class TransferService {
  constructor(
    @Inject('TRANSFERS_REPOSITORY')
    private transfersRepository: typeof Transfer,
  ) {}

  async create(createTransferDto: CreateTransferDto) {
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
