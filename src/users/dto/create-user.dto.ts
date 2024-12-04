import { IsString, IsEnum } from 'class-validator';

export enum UserType {
  DEVELOPER = 'developer',
  PEDREIRO = 'pedreiro',
}

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsEnum(UserType)
  type: UserType;
}
