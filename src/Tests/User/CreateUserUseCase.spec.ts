import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository } from '../../Infrastructure/Repository/UserRepository';
import { PrismaService } from '../../Infrastructure/Repository/PrismaService';
import { CreateUserUseCase } from '../../UseCases/User/CreateUserUseCase';
import { CreateUserInputDTO } from '../../UseCases/User/DTO/CreateUserInputDTO';
describe('CreateUserUseCase (Integration)', () => {
    let createUserUseCase: CreateUserUseCase;
    let prismaService: PrismaService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PrismaService,
                UserRepository,
                {
                    provide: 'IUserRepository',
                    useClass: UserRepository, // Diz ao NestJS para usar UserRepository para IUserRepository
                },
                CreateUserUseCase,
            ],
        }).compile();

        prismaService = module.get<PrismaService>(PrismaService);
        createUserUseCase = module.get<CreateUserUseCase>(CreateUserUseCase);
    });

    beforeEach(async () => {
        await prismaService.user.deleteMany(); // Limpa o banco antes de cada teste
    });

    it('should create a user and save it in the database', async () => {
        const input: CreateUserInputDTO = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: '4444'
        };

        await createUserUseCase.execute(input);

        const userInDb = await prismaService.user.findUnique({
            where: { email: input.email },
        });

        expect(userInDb).toBeTruthy();
        expect(userInDb?.name).toBe(input.name);
        expect(userInDb?.email).toBe(input.email);
    });
});