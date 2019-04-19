import { FormsRoutingModule } from './forms-routing.module';

describe('FormsRoutingModule', () => {
  let formsRoutingModule: FormsRoutingModule;

  beforeEach(() => {
    formsRoutingModule = new FormsRoutingModule();
  });

  it('should create an instance', () => {
    expect(formsRoutingModule).toBeTruthy();
  });
});
