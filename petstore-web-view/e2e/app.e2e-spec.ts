import { RbcPetstoreWebViewPage } from './app.po';

describe('petstore-web-view App', () => {
  let page: RbcPetstoreWebViewPage;

  beforeEach(() => {
    page = new RbcPetstoreWebViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
