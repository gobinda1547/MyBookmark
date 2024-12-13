import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    // will write signup related business logic here
    signup() {
        return 'I am sign up'
    }

    // will write signin related business logic here
    signin() {
        return 'I am sign in'
    }
}
