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
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll() {
    return `getAll`;
  }

  @Get('search')
  search(@Query('name') name: string) {
    return this.usersService.search(name);
  }

  @Get('/:id')
  getOne(@Param('id') userId: number) {
    return this.usersService.getOne(userId);
  }

  @Post()
  async create(@Body() userData: CreateUserDto) {
    return await this.usersService.create(userData);
  }

  @Delete('/:id')
  remove(@Param('id') userId: number) {
    return this.usersService.deleteOne(userId);
  }

  @Patch('/:id')
  patch(@Param('id') userId: number, @Body() updateData: UpdateUserDto) {
    return this.usersService.update(userId, updateData);
  }
}
