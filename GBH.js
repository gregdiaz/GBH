const {Builder, By, until} = require('selenium-webdriver');
let driver = new Builder()
    .forBrowser('chrome')
    .build();
driver.get('http://gbh.com.do/');
driver.findElement(By.xpath('//*[@id="ls-global"]/body/header/div[1]/div/a'));
driver.findElement(By.xpath('//*[@id="menu-item-4570"]/div/a'));
driver.findElement(By.xpath('//*[@id="menu-item-28"]/a'));
driver.findElement(By.xpath('//*[@id="menu-item-1052"]/a'));
driver.findElement(By.xpath('//*[@id="menu-item-4570"]/div/a'));
driver.findElement(By.xpath('//*[@id="menu-item-25"]/a'));
driver.findElement(By.xpath('//*[@id="menu-item-27"]/a'));
driver.findElement(By.xpath('//*[@id="menu-item-1080"]/a'));
driver.findElement(By.xpath('//*[@id="menu-item-209"]/a')).click;
driver.quit();