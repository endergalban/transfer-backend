import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReceiverService } from './receiver.service';
import { CreateReceiverDto } from './dto/create-receiver.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Receivers')
@Controller('receiver')
export class ReceiverController {
  constructor(private readonly receiverService: ReceiverService) {}

  @Post()
  create(@Body() createReceiverDto: CreateReceiverDto) {
    return this.receiverService.create(createReceiverDto);
  }

  @Get()
  findAll() {
    return this.receiverService.findAll();
  }
}
