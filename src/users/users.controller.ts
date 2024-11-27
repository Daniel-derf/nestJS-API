import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

  // GET /users -> []
  @Get()
  getUsers(@Query('type') type: string) {
    return [{type}];
  }

  // GET /users/:id -> {...}
  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return {
      id
    };
  }

  // POST /users
  @Post()
  createUser(@Body() createUserDto: CreateUserDto){
    return {
      'name': createUserDto.name
    };
  }

  // PUT /users/:id -> {...}
  @Put(':id')
  updateUser(@Param('id') id: string) {
    return {
      id
    };
  }

  // DELETE /users/:id
  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return {
      id
    };
  }

}


