import { User } from "src/Domain/User";
import { CreateUserDTO } from "./DTO/CreateUserInputDTO";
import { IUserRepository } from "src/UseCases/User/Repositories/IUserRepository";
import { UseCase } from "../UseCase";

export class CreateUserUseCase implements UseCase<CreateUserDTO,void>{

    private readonly userRepository: IUserRepository;
    public constructor(_userRepository: IUserRepository){
        this.userRepository = _userRepository
    }
    async execute(user: CreateUserDTO): Promise<void>{

        const newUser = User.create(user);
        const exist = await this.userRepository.verifyUserByEmail(newUser.Email)
        if(exist)
            throw new Error("Usuário já existente");       
        return await this.userRepository.create(newUser);       
    }

    
    
}