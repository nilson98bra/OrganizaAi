import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { JwtModule } from "@nestjs/jwt";
import { AuthGuardService } from "Infrastructure/Services/AuthGuardService";
import { AuthService } from "Infrastructure/Services/AuthService";

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, 
      signOptions: { expiresIn: '60m' }, 
    }),
  ],
    providers: [
      { provide: 'IAuthService', 
      useClass: AuthService},
      {provide: APP_GUARD,
        useClass: AuthGuardService,},
    ],
    exports: [
        'IAuthService',
    ],
  })
  export class AuthModule {}