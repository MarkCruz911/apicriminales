import { Test, TestingModule } from '@nestjs/testing';
import { CriminalController } from './criminal.controller';
import { CriminalService } from './criminal.service';

describe('CriminalController', () => {
  let controller: CriminalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CriminalController],
      providers: [CriminalService],
    }).compile();

    controller = module.get<CriminalController>(CriminalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
