import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getAll() {
    return `allAll`;
  }

  getOne(userId) {
    return `getOne id: ${userId}`;
  }

  search(name) {
    return `search name: ${name}`;
  }

  deleteOne(userId) {
    return `deleteOne id: ${userId}`;
  }

  create(userData) {
    return `body: ${JSON.stringify(userData)}`;
  }

  update(userId, updateData) {
    return `id: ${userId} body: ${JSON.stringify(updateData)}`;
  }
}
