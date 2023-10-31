import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Role } from 'src/auth/enums/role.enum';

export class UpdateEmployeeDto {
  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  hash: string;

  @IsOptional()
  roles: Role[];
}
