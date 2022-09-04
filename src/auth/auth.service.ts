import { Injectable } from '@nestjs/common';
import {UsersService} from "../users/users.service";
import { UserLoginDto } from './dto/user-login.dto';

@Injectable()
export class AuthService {
    constructor(

        private readonly userService: UsersService
    ) {}

    async login(user: UserLoginDto) {
        const userExist = await this.userService.findByUserName(user.userName)
        const passwordEncrypted = user.password;//bencrypt(user.password);
        if (passwordEncrypted === userExist.password) {
            return "El usuario existe";
        }else{
            return "El usuario no existen o la contraseña no es correcta";
        }
    }

}
