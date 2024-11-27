import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Daniel', type: 'developer' },
    { id: 2, name: 'Junior', type: 'pedreiro' },
  ]

  getUsers(type?: 'developer' | 'pedreiro') {
    if (type) {
      return this.users.filter(user => user.type === type)
    }

    return this.users
  }

  getOneUser(id: number){
    const user = this.users.find((user) => user.id === id)

    if (!user) {
      throw new Error('User not found')
    }

    return user
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      id: Date.now()
    }
    this.users.push(newUser)
  }

  updateUser(id:number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto }
      }

      return user;
    });

    return this.getOneUser(id);
  }

  removeUser(id: number){
    const toBeRemoved = this.getOneUser(id);

    this.users = this.users.filter(user => user.id !== id);

    return toBeRemoved;
  }


}

