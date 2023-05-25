import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @Length(4, 20)
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsNumber()
  @IsNotEmpty()
  readonly age: number;

  @IsOptional() // 선택적인 맴버로 변경
  @IsString({ each: true }) // 모든 요소를 하나씩 검사한다는 것 즉, 배열의 각 요소가 모두 문자열인지를 확인하는 역할
  readonly family: string[];
}
