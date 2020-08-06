const {Builder, By, Key, until} = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.ENTER);
    await driver.wait(until.titleIs('webdriver - Пошук Google'), 1000);
    await driver.quit();
  
}

exports.example = example;