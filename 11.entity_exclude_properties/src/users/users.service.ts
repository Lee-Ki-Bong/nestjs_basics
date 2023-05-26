import { Injectable } from '@nestjs/common';
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
    // 반환 객체를 Users로 변환
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

  async create(userData: CreateUserDto) {
    const hashPassword = await bcrypt.hash(userData.password, 10); // (password, salt)
    const res = await this.userRepository.save({
      ...userData,
      password: hashPassword,
    });
    console.log(res);
    return res;
  }

  async update(userId: number, updateData: UpdateUserDto) {
    const userRow = this.getOne(userId);
    const hashPassword = await bcrypt.hash(updateData.password, 10); // (password, salt)
    const res = await this.userRepository.save({
      id: userId,
      ...userRow,
      ...updateData,
      password: hashPassword,
    });
    return res;
  }
}
