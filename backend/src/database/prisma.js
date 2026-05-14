const { PrismaClient } = require('@prisma/client');

const globalForPrisma = global;

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error']
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

const connectPrisma = async () => {
  await prisma.$connect();
};

const disconnectPrisma = async () => {
  await prisma.$disconnect();
};

module.exports = {
  prisma,
  connectPrisma,
  disconnectPrisma
};
