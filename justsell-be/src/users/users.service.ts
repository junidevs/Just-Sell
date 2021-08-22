import { Injectable } from '@nestjs/common';

export type User ={
    userId:number,
    username:string,
    password:string,
    role:string
}

@Injectable()
export class UsersService {
    private users:User[];

    constructor(){
        this.users =[];
    }

    async findOne(username:string):Promise<User | undefined> {
        return this.users.find(user => user.username === username)

    }
}
