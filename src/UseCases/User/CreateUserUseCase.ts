import { User } from "../../Domain/User";
import { CreateUserInputDTO } from "./DTO/CreateUserInputDTO";
import { IUserRepository } from "./Contracts/IUserRepository";
import { UseCase } from "../UseCase";
import { Inject, Injectable } from "@nestjs/common";
import { ICryptoService } from "../ICryptoService";

@Injectable()
export class CreateUserUseCase implements UseCase<CreateUserInputDTO,void>{

    constructor(@Inject('IUserRepository') private readonly userRepository: IUserRepository, 
                @Inject('ICryptoService') private readonly cryptoService: ICryptoService ) {}

    async execute(user: CreateUserInputDTO): Promise<void>{
        const exist = await this.userRepository.verifyUserByEmail(user.email)      
        if(exist)
            throw new Error("Usuário já existente"); 
        user.password = await this.cryptoService.hashPassword(user.password) 
        const newUser = User.create(user);           
        return await this.userRepository.create(newUser);       
    }
    
}