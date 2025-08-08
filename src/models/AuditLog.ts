import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('audit_logs')
export class AuditLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  action: string;

  @Column({ type: 'jsonb' })
  details: Record<string, any>;

  @CreateDateColumn()
  created_at: Date;
}