import { Injectable } from "@nestjs/common";
import { CreateUserUseCase } from "./CreateUseCase";
import { UpdateUserUseCase } from "./UpdateUseCase";
import { CreateUserDTO } from "./DTO/CreateUserInputDTO";
import { UpdateUserDTO } from "./DTO/UpdateUserInputDTO";

@Injectable()
export class UserService{
    
    constructor(
        private readonly createUserUseCase: CreateUserUseCase,
        private readonly updateUserUseCase: UpdateUserUseCase

    ){}
      
    async createUser(createUserValues: CreateUserDTO) {
        return this.createUserUseCase.execute(createUserValues);
    }
        
    async updateUser(updateUserValues: UpdateUserDTO) {
        return this.updateUserUseCase.execute(updateUserValues);
    }
    
}



