import { Inject, Injectable } from '@nestjs/common';
import { Receiver } from './entities/receiver.entity';
import { CreateReceiverDto } from './dto/create-receiver.dto';

@Injectable()
export class ReceiverService {
  constructor(
    @Inject('RECEIVERS_REPOSITORY')
    private receiversRepository: typeof Receiver,
  ) {}

  create(createReceiverDto: CreateReceiverDto) {
    return this.receiversRepository.create<Receiver>({
      name: createReceiverDto.name,
      identification: createReceiverDto.identification
        .toUpperCase()
        .replace(/\./g, '')
        .replace('-', ''),
      email: createReceiverDto.email,
      phone: createReceiverDto.phone,
      bank: createReceiverDto.bank,
      accountType: createReceiverDto.accountType,
      accountNumber: createReceiverDto.accountNumber,
    });
  }

  async findAll(): Promise<Receiver[]> {
    return this.receiversRepository.findAll<Receiver>();
  }

  async find(id: number): Promise<any> {
    return this.receiversRepository.findByPk<Receiver>(id);
  }

  async remove(id: number) {
    return this.receiversRepository.destroy<Receiver>({ where: { id } });
  }
}
