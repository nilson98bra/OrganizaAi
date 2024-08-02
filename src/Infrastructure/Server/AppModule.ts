import { Module } from '@nestjs/common';
import { UserModule } from '../Modules/UserModule';

@Module({
  imports: [UserModule]
})
export class AppModule {}