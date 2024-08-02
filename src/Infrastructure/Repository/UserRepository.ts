import { IUserRepository } from "src/UseCases/User/Repositories/IUserRepository";
import { User } from "src/Domain/User";
import { PrismaService } from "./PrismaService";


export class UserRepository implements IUserRepository {

    constructor(private prisma: PrismaService) {}

    async findUserById(id: string): Promise<User | null> {
      return this.prisma.user.findUnique({
          where: { id: parseInt(id) },
      });
    }
  async create(user: User): Promise<void> {
    await this.prisma.user.create({
        data: {
            name: user.Name,
            email: user.Email,
            password: user.Password,
        },
    });
}
    update(user: User): Promise<void> {
      throw new Error("Method not implemented.");
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