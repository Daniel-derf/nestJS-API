import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  NotFoundException,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeveloperGuard } from 'src/developer/developer.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /users -> []
  @Get()
  getUsers(@Query('type') type: 'developer' | 'pedreiro') {
    return this.usersService.getUsers(type);
  }

  // GET /users/:id -> {...}
  @Get(':id')
  getOneUser(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.usersService.getOneUser(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  // POST /users
  @Post()
  @UseGuards(DeveloperGuard)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  // PUT /users/:id -> {...}
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(+id, updateUserDto);
  }

  // DELETE /users/:id
  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }
}
