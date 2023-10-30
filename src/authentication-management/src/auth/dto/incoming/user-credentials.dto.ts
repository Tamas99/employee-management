import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class UserCredentials {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  hash: string;
}
