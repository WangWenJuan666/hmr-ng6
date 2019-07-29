import { TechnologyStackModule } from './technology-stack.module';

describe('TechnologyStackModule', () => {
  let technologyStackModule: TechnologyStackModule;

  beforeEach(() => {
    technologyStackModule = new TechnologyStackModule();
  });

  it('should create an instance', () => {
    expect(technologyStackModule).toBeTruthy();
  });
});
