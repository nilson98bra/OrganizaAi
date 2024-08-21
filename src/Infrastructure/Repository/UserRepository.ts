import { IUserRepository } from "../../UseCases/User/Contracts/IUserRepository";
import { User } from "../../Domain/User";
import { PrismaService } from "./PrismaService";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository implements IUserRepository {

    constructor(private prisma: PrismaService) {}
  
  
  async findUserByEmail(email: string):Promise< User | null>  {
    const user= await this.prisma.user.findUnique({
        where: { email: email },
    });
    if (user == null) return null;
      return User.create({
        name: user.name,
        email: user.email,
        password: user.password,
    }, user.id.toString());
  }
  
  
  
    async  changePassword(email: string, newPassWord: string): Promise<void> {
      await this.prisma.user.update({
        where: {
          email: email,
        },
        data: {
          password: newPassWord
        }
      })
  }

    async findUserById(id: string): Promise< User | null> {
      const user= await this.prisma.user.findUnique({
        where: { id: id },
    });

    if (!user) return null;

      return User.create({
          name: user.name,
          email: user.email,
          password: user.password,
      }, user.id.toString());
      
    }
  async create(user: User): Promise<void> {
    await this.prisma.user.create({
        data: {
            id: user.id,
            name: user.Name,
            email: user.Email,
            password: user.Password,
        },
    });
}
    async update(user: User): Promise<void> {
      
      await this.prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          name: user.Name,
          email: user.Email,
          password: user.Password,
        },
      })
    }

    listAll(user: User): Promise<void> {
      throw new Error("Method not implemented.");
    }

    async verifyUserByEmail(email: string): Promise<boolean> {
      const user = await this.prisma.user.findUnique({
          where: { email },
      });
      return user !== null;
  }
    
  }