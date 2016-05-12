import {t, selectDropdownByValue} from '../../frameworks/test.framework/index';

declare var browser: any, element: any, by: any;

t.describe('Home', function() {

  t.be(function() {
    browser.get('/');
  });

  t.it('should have correct h2', function() {
      t.e(element(by.css('sd-app sd-home h2')).getText()).toEqual('Welcome to Google I/O Extended!');
  });
 
  t.it('should have an input', function() {
    t.e(element(by.css('sd-app sd-home form input')).isPresent()).toEqual(true);
  });

  t.it('should have a list of computer scientists', function() {
    t.e(element(by.css('sd-app sd-home ul')).getText())
      .toEqual('Android\nChrome\nAngular\nFireBase');
  });

  t.it('should add a name to the list using the form', function() {
    element(by.css('sd-app sd-home form input')).sendKeys('Tim Berners-Lee');
    element(by.css('sd-app sd-home form button')).click();
    t.e(element(by.css('sd-app sd-home ul')).getText())
      .toEqual('Android\nChrome\nAngular\nFireBase\nTim Berners-Lee');
  });

});
