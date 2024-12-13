import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    // here we have injected AuthService because
    // we have to separate the business logices from
    // this controller class to service class.
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup() {
        return this.authService.signup()
    }

    @Post('signin')
    signin() {
        return this.authService.signin()
    }
}
