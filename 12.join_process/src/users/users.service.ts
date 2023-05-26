import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { Users } from './entitis/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async getAll() {
    const res = await this.userRepository.find();
    return res;
  }

  async getOne(userId: number): Promise<Users> {
    const res = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
    const users = plainToClass(Users, res);
    return users;
  }

  async search(name: string) {
    const res = await this.userRepository.find({
      where: {
        name: Like(`%${name}%`),
      },
    });
    return res;
  }

  async deleteOne(userId: number) {
    const res = await this.userRepository.delete(userId);
    return res;
  }

  async getExistenceEmailUser(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    return user;
  }

  async create(userData: CreateUserDto) {
    // 이메일 중복 확인
    const user = await this.userRepository.findOne({
      where: { email: userData.email },
    });
    if (user) throw new BadRequestException('이미 사용중인 이메일 입니다.');

    // 비밀번호
    const hashPassword = await bcrypt.hash(userData.password, 10); // (password, salt)

    // 생성
    const res = await this.userRepository.save({
      ...userData,
      password: hashPassword,
    });
    return res;
  }

  async update(userId: number, updateData: UpdateUserDto) {
    const userRow = this.getOne(userId);
    const updateUser = plainToClass(Users, { ...userRow, ...updateData });
    const res = await this.userRepository.save({
      id: userId,
      ...updateUser,
    });
    return res;
  }
}
