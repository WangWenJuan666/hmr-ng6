import { OnselfModule } from './onself.module';

describe('OnselfModule', () => {
  let onselfModule: OnselfModule;

  beforeEach(() => {
    onselfModule = new OnselfModule();
  });

  it('should create an instance', () => {
    expect(onselfModule).toBeTruthy();
  });
});
