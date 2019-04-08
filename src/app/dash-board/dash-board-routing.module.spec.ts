import { DashBoardRoutingModule } from './dash-board-routing.module';

describe('DashBoardRoutingModule', () => {
  let dashBoardRoutingModule: DashBoardRoutingModule;

  beforeEach(() => {
    dashBoardRoutingModule = new DashBoardRoutingModule();
  });

  it('should create an instance', () => {
    expect(dashBoardRoutingModule).toBeTruthy();
  });
});
