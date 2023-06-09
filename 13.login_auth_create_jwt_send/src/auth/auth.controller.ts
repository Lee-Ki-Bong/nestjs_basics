import {
  Body,
  Controller,
  HttpCode,
  UseGuards,
  HttpStatus,
  Post,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignInDto } from './dto/auth-signin.dto';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK) // Post 는 성공시 201로 응답함. 200으로 응답하도록 변경.
  @Post('login')
  signIn(@Body() signInDto: AuthSignInDto) {
    return this.authService.signin(signInDto.email, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
