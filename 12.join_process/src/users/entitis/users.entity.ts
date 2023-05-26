import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('increment', { comment: '회원 테이블 시퀀스' })
  id: number;

  @Column({ length: 255, comment: '이름' })
  name: string;

  @Column({ comment: 'email' })
  email: string;

  @Exclude()
  @Column({ length: 255, comment: '비밀번호' })
  password: string;

  @Column({ comment: '나이' })
  age: number;

  @Column('json', { nullable: true, comment: '가족 사항' })
  family: string[];

  @CreateDateColumn({ comment: '가입일' })
  created_at: Date;

  @UpdateDateColumn({ comment: '수정일' })
  updated_at: Date;

  // @Column({ type: 'timestamp', comment: '탈퇴일' })
  // leave_at: Date;

  // @Column({ type: 'timestamp', comment: '휴먼일' })
  // dormancy_at: Date;

  // @UpdateDateColumn({ comment: '마지막 접속일' })
  // last_login_at: Date;
}
