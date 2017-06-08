import { browser, by, element } from 'protractor';

export class LearnersmanagementsystemPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
