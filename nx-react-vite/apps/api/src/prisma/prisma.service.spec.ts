import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
  let service: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  it('should connect to the database successfully', async () => {
    const result = await service.$queryRaw`SELECT 1`;
    expect(result).toEqual([{ '1': 1 }]); // Adjust based on the query result you expect
  });
});
