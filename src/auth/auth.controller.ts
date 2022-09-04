import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('login')
    async login(@Body() user: UserLoginDto) {
        return await this.authService.login(user);
    }
}
