import { Injectable } from "@nestjs/common";
import { UseCase } from "../UseCase";
import { UpdateUserDTO } from "./DTO/UpdateUserInputDTO";
import { IUserRepository } from "./Repositories/IUserRepository";

@Injectable()
export class UpdateUserUseCase implements UseCase<UpdateUserDTO ,void>{

    private readonly userRepository: IUserRepository;
    public constructor(_userRepository: IUserRepository){
        this.userRepository = _userRepository
    }
    async execute(userChanges: UpdateUserDTO): Promise<void>{

        const existingUser = await this.userRepository.findUserById(userChanges.id);
        if (!existingUser) {
            throw new Error("Usuário não encontrado!");
        }
        existingUser.Name = userChanges.name;
        existingUser.Email = userChanges.email;
        existingUser.Password = userChanges.password;
        existingUser.validate();
        await this.userRepository.update(existingUser);

    }

    
    
}