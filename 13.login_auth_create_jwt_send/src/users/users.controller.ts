import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async getAll() {
    return await this.usersService.getAll();
  }

  @Get('search')
  async search(@Query('name') name: string) {
    return await this.usersService.search(name);
  }

  @Get('/:id')
  async getOne(@Param('id') userId: number) {
    return await this.usersService.getOne(userId);
  }

  @Post('/join')
  async join(@Body() userData: CreateUserDto) {
    return await this.usersService.create(userData);
  }

  @Delete('/:id')
  async remove(@Param('id') userId: number) {
    return await this.usersService.deleteOne(userId);
  }

  @Patch('/:id')
  async patch(@Param('id') userId: number, @Body() updateData: UpdateUserDto) {
    return await this.usersService.update(userId, updateData);
  }
}
