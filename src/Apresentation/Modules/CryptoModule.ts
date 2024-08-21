import { Module } from "@nestjs/common";
import { CryptoService } from "Infrastructure/Services/CryptoService";

@Module({
    providers: [
      { provide: 'ICryptoService', 
      useClass: CryptoService},
    ],
    exports: [
        'ICryptoService',
    ],
  })
  export class CryptoModule {}