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

@Controller('users')
export class UsersController {
  /**
   * GET localhost:3000/users
   */
  @Get()
  getAll() {
    return `getAll`;
  }

  /**
   * GET localhost:3000/users/search?name=John
   * search 부분이 get(:id) 보다 밑에 있으면 nestjs 는 search를 id 로 판단한다. express 도 마찬가지
   */
  @Get('search')
  search(@Query('name') name) {
    console.log(typeof name); // string
    return `search name: ${name}`;
  }

  /**
   * GET localhost:3000/users/5
   */
  @Get('/:id')
  getOne(@Param('id') userId) {
    console.log(typeof userId); // string
    return `id: ${userId}`;
  }

  /**
   * Post localhost:3000/users/
   * Body > json ex)
   * { "name" : "뉴메이크샵" }
   */
  @Post()
  create(@Body() userData) {
    console.log(typeof userData); // object
    return `body: ${JSON.stringify(userData)}`;
  }

  /**
   * Delete localhost:3000/users/2
   */
  @Delete('/:id')
  remove(@Param('id') userId) {
    return `id: ${userId}`;
  }

  /**
   *  PATCH localhost:3000/users/2
   *  @Put() 은 해당 리소스를 완전히 대체하는 업데이트 작업
   *  @Patch() 은 리소스의 일부를 수정 또는 업데이트하는 데 사용
   */
  @Patch('/:id')
  patch(@Param('id') userId, @Body() updateData) {
    return `id: ${userId} body: ${JSON.stringify(updateData)}`;
  }
}
