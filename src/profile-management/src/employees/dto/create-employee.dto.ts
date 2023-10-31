import { IsOptional, IsString } from 'class-validator';
import { Role } from 'src/auth/enums/role.enum';

export class CreateEmployeeDto {
  @IsString()
  email: string;

  @IsString()
  hash: string;

  @IsOptional()
  roles: Role[];
}
