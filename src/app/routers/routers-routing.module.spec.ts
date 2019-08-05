import { RoutersRoutingModule } from './routers-routing.module';

describe('RoutersRoutingModule', () => {
  let routersRoutingModule: RoutersRoutingModule;

  beforeEach(() => {
    routersRoutingModule = new RoutersRoutingModule();
  });

  it('should create an instance', () => {
    expect(routersRoutingModule).toBeTruthy();
  });
});
