import { PrismaService } from "../../Infrastructure/Repository/PrismaService";
import { Module } from "@nestjs/common";
import { UserRepository } from "Infrastructure/Repository/UserRepository";

@Module({
    providers: [
        PrismaService,
        {
            provide: 'IUserRepository',
            useClass: UserRepository,
        }
    ],
    exports: ['IUserRepository'],
})
export class RepositoryModule {}