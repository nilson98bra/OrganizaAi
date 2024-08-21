import { Body, Controller, Post } from "@nestjs/common";
import { AccessService } from "UseCases/Access/Index";
import { LoginDTO } from "UseCases/Access/DTO/LoginDTO";
import { Public } from "Utils/Utils";


@Controller('login')
export class LoginController{

    constructor(private readonly accessService: AccessService) {}
   
    
   @Public() 
   @Post()
   createUser(@Body() login: LoginDTO) {
      return this.accessService.login(login);
   }

   

   
}