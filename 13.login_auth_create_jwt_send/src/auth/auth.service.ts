import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async signin(email: string, password: string) {
    // user check
    const user = await this.usersService.getExistenceEmailUser(email);
    if (!user) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인하세요');
    }

    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인하세요');
    }

    // JWT
    const payload = { sub: user.id, useremail: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
