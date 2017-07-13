import { Angular41Page } from './app.po';

describe('angular41 App', () => {
  let page: Angular41Page;

  beforeEach(() => {
    page = new Angular41Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
