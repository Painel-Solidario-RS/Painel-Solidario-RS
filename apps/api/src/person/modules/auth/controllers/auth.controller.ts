import { Body, Post } from '@nestjs/common';
import { Controller, Inject, Res } from '@nestjs/common/decorators';
import { Response } from 'express';
import { ValidationPipe } from 'src/common/validation.pipe';
import { Public } from '../decorators/public.decorator';
import { LoginDTO } from '../dto/login.dto';
import { AuthService } from '../services/auth.service';
import { JwtPayload } from '../types';

@Controller('auth')
export class AuthController {
  public constructor(
    @Inject(AuthService)
    public readonly authService: AuthService,
  ) {}

  @Public()
  @Post('login')
  public async login(
    @Body(new ValidationPipe()) args: LoginDTO,
    @Res({ passthrough: true }) response: Response,
  ): Promise<JwtPayload> {
    const { token, payload } = await this.authService.login(
      args.email,
      args.password,
    );
    response.header('x-auth-token', token);
    return payload;
  }
}
