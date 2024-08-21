import { Injectable} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IAuthService } from 'UseCases/Access/Contracts/IAuthService';

@Injectable()
export class AuthService implements IAuthService {
  constructor(private readonly jwtService: JwtService) {}
 
  async sign(
    id: string,
    name: string
  ): Promise<{ access_token: string }> {
    
    const payload = { sub: id, username: name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}