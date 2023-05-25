import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll() {
    return `getAll`;
  }

  @Get('search')
  search(@Query('name') name) {
    console.log(typeof name);
    return this.usersService.search(name);
  }

  @Get('/:id')
  getOne(@Param('id') userId) {
    console.log(typeof userId);
    return this.usersService.getOne(userId);
  }

  @Post()
  create(@Body() userData) {
    console.log(typeof userData);
    return this.usersService.create(userData);
  }

  @Delete('/:id')
  remove(@Param('id') userId) {
    return this.usersService.deleteOne(userId);
  }

  @Patch('/:id')
  patch(@Param('id') userId, @Body() updateData) {
    return this.usersService.update(userId, updateData);
  }
}
