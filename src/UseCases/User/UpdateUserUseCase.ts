import { Inject, Injectable } from "@nestjs/common";
import { UseCase } from "../UseCase";
import { UpdateUserInputDTO } from "./DTO/UpdateUserInputDTO";
import { IUserRepository } from "./Contracts/IUserRepository";
import { ICryptoService } from "../ICryptoService";

@Injectable()
export class UpdateUserUseCase implements UseCase<UpdateUserInputDTO ,void>{

    constructor(@Inject('IUserRepository') private readonly userRepository: IUserRepository, 
    @Inject('ICryptoService') private readonly cryptoService: ICryptoService ) {}

    async execute(userChanges: UpdateUserInputDTO): Promise<void>{

        const existingUser = await this.userRepository.findUserById(userChanges.id);
        if (!existingUser) {
            throw new Error("Usuário não encontrado!");
        }
        existingUser.Name = userChanges.name;
        existingUser.Email = userChanges.email;
        existingUser.Password = await this.cryptoService.hashPassword(userChanges.password);
        existingUser.validate();
        await this.userRepository.update(existingUser);

    }

    
    
}