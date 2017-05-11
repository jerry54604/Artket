import { browser, element, by } from 'protractor';

export class TripPlannerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tp-root h1')).getText();
  }
}
