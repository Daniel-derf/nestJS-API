import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /users -> []
  @Get()
  getUsers(@Query('type') type: 'developer' | 'pedreiro') {

    return this.usersService.getUsers(type)
  }

  // GET /users/:id -> {...}
  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return this.usersService.getOneUser(+id)
  }

  // POST /users
  @Post()
  createUser(@Body() createUserDto: CreateUserDto){
    return this.usersService.createUser(createUserDto)
  }

  // PUT /users/:id -> {...}
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(+id, updateUserDto)
  }

  // DELETE /users/:id
  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(+id)
  }

}


