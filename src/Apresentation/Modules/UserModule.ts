import { Module } from '@nestjs/common';
import { UserController } from '../Controllers/UserController';
import { RepositoryModule } from './RepositoryModule';
import { CryptoModule } from './CryptoModule';
import { 
  CreateUserUseCase,
  UpdateUserUseCase, 
  ChangePasswordUseCase, 
  UserService  
} from '../../UseCases/User/Index';


@Module({
  imports: [RepositoryModule, CryptoModule],
  controllers: [UserController],
  providers: [
    UserService, 
    CreateUserUseCase, 
    UpdateUserUseCase, 
    ChangePasswordUseCase
  ],
  exports: [UserService],
})
export class UserModule {}
