import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('schedules', { schema: 'core' })
export class ScheduleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /** Campos de creación, actualización y eliminación **/
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: 'Fecha de creación del horario',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: 'Fecha de última actualización del horario',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Fecha de eliminación del horario',
  })
  deletedAt: Date;

  /** Relación con EmployedEntity **/

  /** Columns **/
  @Column({
    name: 'hour_started_at',
    type: 'integer',
    comment: 'Hora de inicio del turno o jornada',
  })
  hourStartedAt: number;

  @Column({
    name: 'minute_started_at',
    type: 'integer',
    comment: 'Hora de inicio del turno o jornada',
  })
  minuteStartedAt: number;

  @Column({
    name: 'hour_ended_at',
    type: 'integer',
    comment: 'Hora de finalización del turno o jornada',
  })
  hourEndedAt: number;

  @Column({
    name: 'minute_ended_at',
    type: 'integer',
    comment: 'Hora de finalización del turno o jornada',
  })
  minuteEndedAt: number;

  @Column({
    name: 'minutes_lunch',
    type: 'integer',
    nullable: true,
    comment: 'Minutos de almuerzo',
  })
  minutesLunch: number;
}
