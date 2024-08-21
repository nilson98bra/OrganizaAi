import { User } from "../../../Domain/User";

export interface IUserRepository {
    create(user: User): Promise<void>;
    update(user: User): Promise<void>;
    changePassword(email:string, password: String): Promise<void>;
    listAll(user: User): Promise<void>;
    findUserById(id: string): Promise<User| null>;
    findUserByEmail(email: string): Promise<User| null>;
    verifyUserByEmail(email: string): Promise<boolean>;
}