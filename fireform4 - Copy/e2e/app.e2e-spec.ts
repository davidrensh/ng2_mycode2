import { Fireform4Page } from './app.po';

describe('fireform4 App', () => {
  let page: Fireform4Page;

  beforeEach(() => {
    page = new Fireform4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
