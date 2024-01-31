import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.member.createMany({
      data: [
        {
          name: 'Enick',
        },
        {
          name: 'Admin',
        },
      ],
    });
    console.log('Seeded successfully');
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
