import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { BongJwtConstants } from './jwt.constants.keys/bong.constants';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true, // app 전역에서 사용 가능
      secret: BongJwtConstants.secret, // jwt 키 설정,
      signOptions: { expiresIn: '60s' }, // 토큰 유효기간
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
