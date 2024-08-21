import { Module } from '@nestjs/common';
import { LoginController } from '../Controllers/LoginController';
import { RepositoryModule } from './RepositoryModule';
import { CryptoModule } from './CryptoModule';
import { AuthModule } from './AuthModule';
import { 
  LoginUseCase, 
  AccessService 
} from '../../UseCases/Access/Index';


@Module({
  imports: [RepositoryModule, CryptoModule, AuthModule],
  controllers: [LoginController],
  providers: [
    AccessService  , 
    LoginUseCase
  ],
  exports: [AccessService],
})
export class AccessModule {}
