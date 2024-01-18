import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() user) {
    return this.authService.login(user);
  }

  @IsPublic()
  @HttpCode(HttpStatus.OK)
  @Post('refresh/token')
  async refreshToken(@Body() body) {
    return this.authService.verifyRefreshToken(body);
  }
}
