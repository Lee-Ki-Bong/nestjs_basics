import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt'; // 추가

@Injectable()
export class UsersService {
  getAll() {
    return `allAll`;
  }

  getOne(userId: number) {
    return `getOne id: ${userId}`;
  }

  search(name: string) {
    return `search name: ${name}`;
  }

  deleteOne(userId: number) {
    return `deleteOne id: ${userId}`;
  }

  async create(userData: CreateUserDto) {
    // 두번재 인자는 salt, 원본 password를 10회 salt
    const hashPassword = await bcrypt.hash(userData.password, 10);
    console.log(hashPassword);
    return `body: ${JSON.stringify(userData)}`;
  }

  update(userId: number, updateData: UpdateUserDto) {
    return `id: ${userId} body: ${JSON.stringify(updateData)}`;
  }
}
