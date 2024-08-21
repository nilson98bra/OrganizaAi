import { Injectable } from "@nestjs/common";
import { CreateUserInputDTO } from "./DTO/CreateUserInputDTO";
import { UpdateUserInputDTO } from "./DTO/UpdateUserInputDTO";
import { ChangePasswordDTO } from "./DTO/ChangePasswordDTO";
import { CreateUserUseCase, 
        UpdateUserUseCase, 
        ChangePasswordUseCase 
} from "./Index";

@Injectable()
export class UserService{
    
    constructor(
        private readonly createUserUseCase: CreateUserUseCase,
        private readonly updateUserUseCase: UpdateUserUseCase,
        private readonly changePasswordUseCase: ChangePasswordUseCase,


    ){}
      
    async createUser(createUserValues: CreateUserInputDTO) {
        return this.createUserUseCase.execute(createUserValues);
    }
        
    async updateUser(updateUserValues: UpdateUserInputDTO) {
        return this.updateUserUseCase.execute(updateUserValues);
    }

    async changePassword(pwChanges: ChangePasswordDTO){
        return this.changePasswordUseCase.execute(pwChanges)
    }



    
}



