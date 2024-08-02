import { Body, Controller, Patch, Post } from "@nestjs/common";
import { CreateUserDTO } from "src/UseCases/User/DTO/CreateUserInputDTO";
import { UserService } from "src/UseCases/User/UserService";
import { UpdateUserDTO } from "src/UseCases/User/DTO/UpdateUserInputDTO";


@Controller('User')
export class UserController{

    constructor(private readonly userService: UserService) {}
    
   @Post()
   createUser(@Body() createUser: CreateUserDTO) {
    console.log("teste")
      return this.userService.createUser(createUser);
   }

   @Patch()
   updateUser(@Body() updateUser: UpdateUserDTO) {
      return this.userService.updateUser(updateUser);
   }
}