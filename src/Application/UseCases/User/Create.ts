import { User } from "src/Domain/User";
import { CreateUserDTO } from "./DTO/CreateUserDTO";
import { IUserRepository } from "src/Application/Interfaces/Repositories/IUserRepository";
import { UseCase } from "../usecase";
import { Mapper } from "src/Application/Utils/Utils";
import { UserProps } from "src/Domain/Types/UserProps";

export class CreateUseCase implements UseCase<CreateUserDTO,void>{

    private readonly userRepository: IUserRepository;
    public constructor(_userRepository: IUserRepository){
        this.userRepository = _userRepository
    }
    async execute(user: CreateUserDTO): Promise<void>{

        const userData = Mapper.fromDTO(user, {} as UserProps);
        const newUser = User.create(userData);
        const exist = await this.userRepository.verifyUserByEmail(newUser.Email)
        if(exist)
            throw new Error("Usuário já existente");       
        return await this.userRepository.save(newUser);       
    }

    
    
}