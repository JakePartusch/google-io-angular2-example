import {t} from '../../frameworks/test.framework/index';

declare var browser: any, element: any, by: any;

t.describe('App', function() {

  t.be(function() {
    browser.get('/');
  });

  t.it('should have a title', function() {
    t.e(browser.getTitle()).toEqual('Angular 2 Seed Advanced');
  });

  t.it('should have a navbar', function() {
      t.e(element(by.css('sd-app sd-navbar nav')).isPresent()).toEqual(true);
  });

  t.it('should have correct nav text for Home', function() {
      t.e(element(by.css('sd-app sd-navbar nav a:first-child')).getText()).toEqual('Home');
  });

  t.it('should have correct nav text for About', function() {
      t.e(element(by.css('sd-app sd-navbar nav a:last-child')).getText()).toEqual('About');
  });

});
