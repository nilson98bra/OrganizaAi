import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        const users = await prisma.user.createMany({
            data: [
                {
                    id: "e1c8655b-08e4-4db3-9d2b-d04b1f1b3484",
                    name: 'Nilson',
                    email: 'nilson.98@gmail.com',
                    password: 'password123',
                },
                {
                    id: "9dcbfc5c-9d5e-4c5a-923d-f3c91f44e9b5",
                    name: 'Lucas',
                    email: 'lucas.rocha@gmail.com',
                    password: 'asafsfda',
                },
                {
                    id: "cc4f8724-690b-4e37-9756-f2dfaf2b84e3",
                    name: 'Caio',
                    email: 'caio.henrique@gmail.com',
                    password: 'a1ssragfa',
                },
            ],
            skipDuplicates: true,
        });

        console.log(`Created ${users.count} users`);
    } catch (error) {
        console.error('Erro ao rodar seeds:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
