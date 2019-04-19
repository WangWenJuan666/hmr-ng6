import { NoticeRoutingModule } from './notice-routing.module';

describe('NoticeRoutingModule', () => {
  let noticeRoutingModule: NoticeRoutingModule;

  beforeEach(() => {
    noticeRoutingModule = new NoticeRoutingModule();
  });

  it('should create an instance', () => {
    expect(noticeRoutingModule).toBeTruthy();
  });
});
