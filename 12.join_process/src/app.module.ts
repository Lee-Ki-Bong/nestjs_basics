import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users } from './users/entitis/users.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // [Modules]
    UsersModule,

    // [typeOrm]
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, // mysql 3306 포트가 디폴트.
      username: 'sample',
      password: 'sam',
      database: 'myNestReview',
      entities: [Users], // 테이블 들이 들어간다.
      synchronize: true, // entities 에 들어갈 객체들과 실제 db와 동기화 시켜줄지 여부. ture 면 동기화.
      logging: true, // log 를 나타내줄지 여부. sql로 어떻게 변경이 되었는지 과정을 알 수 있다.
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
