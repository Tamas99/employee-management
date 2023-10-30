import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Role } from '../enums/role.enum';

export class UpdateEmployeeDto {
  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
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
