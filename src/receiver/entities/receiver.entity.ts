import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Transfer } from '../../transfer/entities/transfer.entity';

@Table
export class Receiver extends Model {
  @Column
  identification: string;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  bank: string;

  @Column
  accountType: string;

  @Column
  accountNumber: number;

  @HasMany(() => Transfer)
  transfers: Transfer[];
}
