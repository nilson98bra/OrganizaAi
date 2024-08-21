import { Injectable } from '@nestjs/common';
import { ICryptoService } from 'UseCases/ICryptoService';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptoService implements ICryptoService{
  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    const result = await bcrypt.compare(password, hashedPassword);
    return result;
  }
}