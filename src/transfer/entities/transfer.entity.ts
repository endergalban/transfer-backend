import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Receiver } from '../../receiver/entities/receiver.entity';

@Table
export class Transfer extends Model {
  @Column
  @ForeignKey(() => Receiver)
  receiverId: number;

  @Column
  amount: number;

  @BelongsTo(() => Receiver)
  receiver: Receiver;
}
