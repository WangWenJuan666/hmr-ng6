import { TechnologyStackRoutingModule } from './technology-stack-routing.module';

describe('TechnologyStackRoutingModule', () => {
  let technologyStackRoutingModule: TechnologyStackRoutingModule;

  beforeEach(() => {
    technologyStackRoutingModule = new TechnologyStackRoutingModule();
  });

  it('should create an instance', () => {
    expect(technologyStackRoutingModule).toBeTruthy();
  });
});
