import { Mapper } from "src/Application/Utils/Utils";
import { UserProps } from "src/Domain/Types/UserProps";
import { UseCase } from "../UseCase";
import { UpdateUserDTO } from "./DTO/UpdateUserDTO";
import { IUserRepository } from "../../Interfaces/Repositories/IUserRepository";

export class CreateUseCase implements UseCase<UpdateUserDTO ,void>{

    private readonly userRepository: IUserRepository;
    public constructor(_userRepository: IUserRepository){
        this.userRepository = _userRepository
    }
    async execute(userChanges: UpdateUserDTO): Promise<void>{

        const userData = Mapper.fromDTO(userChanges, {} as UserProps);
        const existingUser = await this.userRepository.findUserById(userData.id);
        if (!existingUser) {
            throw new Error("Usuário não encontrado!");
        }

        existingUser.Nome = userData.nome;
        existingUser.Email = userData.email;
        existingUser.Senha = userData.senha;
        existingUser.validate();
        await this.userRepository.update(existingUser);
       


    }

    
    
}