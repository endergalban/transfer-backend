import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsOptional,
} from 'class-validator';

export class CreateReceiverDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public identification: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public name: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  public email: string;

  @IsOptional()
  @IsPhoneNumber()
  @ApiProperty()
  public phone: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public bank: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public accountType: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  public accountNumber: number;
}
