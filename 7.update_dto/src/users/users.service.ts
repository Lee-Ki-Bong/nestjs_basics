import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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

  create(userData: CreateUserDto) {
    return `body: ${JSON.stringify(userData)}`;
  }

  update(userId: number, updateData: UpdateUserDto) {
    return `id: ${userId} body: ${JSON.stringify(updateData)}`;
  }
}
