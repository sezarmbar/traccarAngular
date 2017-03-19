import { TraccarAngularPage } from './app.po';

describe('traccar-angular App', () => {
  let page: TraccarAngularPage;

  beforeEach(() => {
    page = new TraccarAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
