import { DashBoardModule } from './dash-board.module';

describe('DashBoardModule', () => {
  let dashBoardModule: DashBoardModule;

  beforeEach(() => {
    dashBoardModule = new DashBoardModule();
  });

  it('should create an instance', () => {
    expect(dashBoardModule).toBeTruthy();
  });
});
