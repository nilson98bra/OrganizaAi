import { UserService } from "src/UseCases/User/UserService";
import { UserController } from "../Controllers/UserController";
import { PrismaService } from "../Repository/PrismaService";
import { Module } from "@nestjs/common";

@Module({
    controllers: [UserController], 
    providers: [UserService, PrismaService], 
    exports: [UserService],
  })
  export class UserModule {}