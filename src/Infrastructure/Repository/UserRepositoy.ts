import { CreateUserDTO } from "src/Application/UseCases/User/DTO/CreateUserDTO";
import { IUserRepository } from "src/Application/Interfaces/Repositories/IUserRepository";
import { UpdateUserDTO } from "src/Application/UseCases/User/DTO/UpdateUserDTO";
import { User } from "src/Domain/User";


export class UserRepository implements IUserRepository {
    findUserById(id: string): Promise<User> {
      throw new Error("Method not implemented.");
    }
    save(user: User): Promise<void> {
      throw new Error("Method not implemented.");
    }
    update(user: User): Promise<void> {
      throw new Error("Method not implemented.");
    }
    listAll(user: User): Promise<void> {
      throw new Error("Method not implemented.");
    }
    verifyUserByEmail(email: string): Promise<boolean> {
      throw new Error("Method not implemented.");
    }
    
  }