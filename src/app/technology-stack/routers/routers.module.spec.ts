import { RoutersModule } from './routers.module';

describe('RoutersModule', () => {
  let routersModule: RoutersModule;

  beforeEach(() => {
    routersModule = new RoutersModule();
  });

  it('should create an instance', () => {
    expect(routersModule).toBeTruthy();
  });
});
