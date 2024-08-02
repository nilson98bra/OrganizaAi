import { User } from "src/Domain/User";

export interface IUserRepository {
    create(user: User): Promise<void>;
    update(user: User): Promise<void>;
    listAll(user: User): Promise<void>;
    findUserById(id: string): Promise<User | null>;
    verifyUserByEmail(email: string): Promise<boolean>;
}