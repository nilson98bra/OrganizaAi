import { Inject, Injectable, NotFoundException} from "@nestjs/common";
import { LoginDTO } from "./DTO/LoginDTO";
import { UseCase } from "UseCases/UseCase";
import { IUserRepository } from "../User/Contracts/IUserRepository";
import { ICryptoService } from "../ICryptoService";
import { IAuthService } from "./Contracts/IAuthService";

Injectable()
export class LoginUseCase implements UseCase<LoginDTO,{access_token:string}>{
    constructor(@Inject('IUserRepository') private readonly userRepository: IUserRepository, 
                @Inject('ICryptoService') private readonly cryptoService: ICryptoService,
                @Inject('IAuthService') private readonly authService: IAuthService) {}

    async execute(login: LoginDTO): Promise<{access_token:string}>{

        const user = await this.userRepository.findUserByEmail(login.email);
        if (!user)
            throw new NotFoundException("User not found!")

        const result = await this.validPassword(login.password,user.Password)
        if(!result)
            throw new NotFoundException("User not found!")

        return this.authService.sign(user.id, user.Email)

    }

    private async validPassword(password: string, hashedPassword: string): Promise<boolean>{
        return await this.cryptoService.comparePasswords(password,hashedPassword)
    }
}