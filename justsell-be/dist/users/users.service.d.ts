export declare type User = {
    userId: number;
    username: string;
    password: string;
    role: string;
};
export declare class UsersService {
    private users;
    constructor();
    findOne(username: string): Promise<User | undefined>;
}
