import { IsOptional, IsString } from 'class-validator';
import { Role } from '../enums/role.enum';

export class CreateEmployeeDto {
  @IsString()
  email: string;

  @IsString()
  hash: string;

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsOptional()
  roles: Role[];
}
