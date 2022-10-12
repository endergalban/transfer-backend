import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, Min } from 'class-validator';

export class CreateTransferDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @ApiProperty()
  public receiverId: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @ApiProperty()
  public amount: number;
}
