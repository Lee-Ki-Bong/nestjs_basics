import { IsNotEmpty, IsString } from 'class-validator';

export class AuthSignInDto {
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
