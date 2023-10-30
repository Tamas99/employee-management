import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { catchError, firstValueFrom } from 'rxjs';
import { comparePasswords } from 'src/auth/helper';
import { UserCredentials } from './dto/incoming/user-credentials.dto';
import { AxiosError } from 'axios';

@Injectable()
export class AuthService {
  private readonly EMPLOYEES_URL: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly jwtService: JwtService,
  ) {
    this.EMPLOYEES_URL = process.env.EMPLOYEES_URL;
  }

  async validateUser(email: string, password: string) {
    const { data } = await firstValueFrom(
      this.httpService
        .get<UserCredentials>(this.EMPLOYEES_URL + '/employees/' + email)
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened! ' + error;
          }),
        ),
    );
    if (!data) {
      return null;
    }

    const isPasswordMatched = await comparePasswords(password, data.hash);
    if (!isPasswordMatched) {
      return null;
    }

    const { hash, ...result } = data;
    return result;
  }

  async login(user: any) {
    const payload = { email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
