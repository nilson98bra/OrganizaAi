import { Module } from '@nestjs/common';
import { UserModule } from './Apresentation/Modules/UserModule';
import { AccessModule } from './Apresentation/Modules/AccessModule';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './Apresentation/Modules/AuthModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    AccessModule,
    AuthModule, 
  ],
 
  exports: [UserModule, AccessModule],
})
export class AppModule {}
