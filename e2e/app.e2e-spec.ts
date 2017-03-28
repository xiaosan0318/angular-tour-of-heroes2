import { AngularTourOfHeroes2Page } from './app.po';

describe('angular-tour-of-heroes2 App', () => {
  let page: AngularTourOfHeroes2Page;

  beforeEach(() => {
    page = new AngularTourOfHeroes2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
