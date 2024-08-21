import { Injectable } from "@nestjs/common";
import { LoginUseCase } from "./Index";
import { LoginDTO } from "./DTO/LoginDTO";

@Injectable()
export class AccessService{
    
    constructor(
        private readonly loginUserUseCase: LoginUseCase
    ){}
      
    async login(login: LoginDTO) {
        return this.loginUserUseCase.execute(login);
    }
            
}



