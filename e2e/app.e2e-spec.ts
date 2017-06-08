import { LearnersmanagementsystemPage } from './app.po';

describe('learnersmanagementsystem App', () => {
  let page: LearnersmanagementsystemPage;

  beforeEach(() => {
    page = new LearnersmanagementsystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
