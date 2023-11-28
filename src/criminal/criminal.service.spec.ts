import { Test, TestingModule } from '@nestjs/testing';
import { CriminalService } from './criminal.service';

describe('CriminalService', () => {
  let service: CriminalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CriminalService],
    }).compile();

    service = module.get<CriminalService>(CriminalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
