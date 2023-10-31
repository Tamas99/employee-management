import { IsString, IsNotEmpty, IsOptional, IsEmail } from 'class-validator';
import { Role } from 'src/auth/enums/role.enum';

export class User {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  hash: string;

  @IsOptional()
  roles: Role[];
}
