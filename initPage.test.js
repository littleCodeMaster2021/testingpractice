const { Builder, By, Key, until } = require('selenium-webdriver')

require('selenium-webdriver/firefox');

var driver;
var returnedText;
beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
  });

afterAll(async () => { 
    await driver.quit();
});
async function mockUserAction() { 
    driver.wait(until.urlIs('http://localhost:8000/index.html')); 
    await driver.get('http://localhost:8000/index.html');
    await driver.findElement(By.id('city')).sendKeys('', Key.RETURN);
    await driver.findElement(By.id('city')).sendKeys('Douala', Key.RETURN);
    await driver.findElement(By.id('btn1')).click();
    await driver.wait(until.elementLocated(By.className('result')), 20000);
    return await driver.findElement(By.id('dat')); 
}



it('initialize the driver and fill up page', async () => {
    element = await mockUserAction();
    await element.getText().then(text => returnedText = text);    
});

  
it('test element text after selenium automation', () => {   
    expect(element).not.toBeNull();
    expect(returnedText).toEqual("City: Douala * Temp: 88.7");
});
  