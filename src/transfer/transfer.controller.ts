import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransferService } from './transfer.service';
import { CreateTransferDto } from './dto/create-transfer.dto';

@ApiTags('Transfers')
@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post()
  async create(@Body() createTransferDto: CreateTransferDto) {
    return this.transferService.create(createTransferDto);
  }

  @Get()
  findAll() {
    return this.transferService.findAll();
  }
}
