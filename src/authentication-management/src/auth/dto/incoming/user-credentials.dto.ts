import { IsString, IsNotEmpty } from 'class-validator';

export class UserCredentials {
  @IsString()
  @IsNotEmpty()
  personalId: string;

  @IsString()
  @IsNotEmpty()
  hash: string;
}
