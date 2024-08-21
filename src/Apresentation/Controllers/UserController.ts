import { Body, Controller, Get, Patch, Post, Request } from "@nestjs/common";
import { CreateUserInputDTO } from "../../UseCases/User/DTO/CreateUserInputDTO";
import { UserService } from "../../UseCases/User/UserService";
import { UpdateUserInputDTO } from "../../UseCases/User/DTO/UpdateUserInputDTO";
import { ChangePasswordDTO } from "UseCases/User/DTO/ChangePasswordDTO";
import { Public } from "Utils/Utils";


@Controller('user')
export class UserController{

    constructor(private readonly userService: UserService) {}
    
   @Post()
   createUser(@Body() createUser: CreateUserInputDTO) {
      return this.userService.createUser(createUser);
   }

   @Patch()
   updateUser(@Body() updateUser: UpdateUserInputDTO) {
      return this.userService.updateUser(updateUser);
   }

   @Patch()
   changePassword(@Body() pwChanges: ChangePasswordDTO) {
      return this.userService.changePassword(pwChanges);
   }

   @Get()
   me(@Request() req){
      return req.user;
   }

   
}