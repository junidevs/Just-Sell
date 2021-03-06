import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
   constructor(
       private usersService: UsersService,
       private jwtService: JwtService,
       ) {}

       async validateUser(username:string,password:string): Promise<any> {
           const user = await this.usersService.findOne(username)
            if(user && await bcrypt.compare(password,user.password)){
                const { password , ...result } = user;
                return result;
           }
            return null;
       }
       async login(user:any):Promise<any>{
           const payload = { username : user.username , sub: user.userId};
            return {
                access_token : this.jwtService.sign(payload);
            }
        }
}
