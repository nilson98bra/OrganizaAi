import { Inject, Injectable } from "@nestjs/common";
import { UseCase } from "UseCases/UseCase";
import { IUserRepository } from "./Contracts/IUserRepository";
import { ChangePasswordDTO } from "./DTO/ChangePasswordDTO";


@Injectable()
export class ChangePasswordUseCase implements UseCase<ChangePasswordDTO ,void>{

    constructor(@Inject('IUserRepository') private readonly userRepository: IUserRepository) {}
    async execute(pwChanges: ChangePasswordDTO): Promise<void>{
        if (pwChanges.password != pwChanges.repeatPassword) {
            throw new Error("Different passwords!");
        }   
        await this.userRepository.changePassword(pwChanges.email,pwChanges.password)
    }

    
    
}