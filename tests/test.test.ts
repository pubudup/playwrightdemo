import { assert } from 'console';
import { HomePage } from '../pages/home.page';
import {chromium, firefox} from 'playwright';
import { Util } from '../util/util';
import { expect } from 'chai';
import { InventoryPage } from '../pages/inventory.page';
const JSONData = require('../resources/test.json');


//TODO
// pass testcaseId into aftereach method to be able to add to screenshot file name
// Find a way to capture testcase status once passed/failed

describe('Test', async () =>{

let browser,page,testcaseId,currentURL;

    before(async() => {
        let browserName = JSONData.Browser; // chromium,firefox,webkit

        browser = await chromium.launch({headless: false});
    })
    beforeEach(async() => {
        page = await browser.newPage();
        await page.goto(JSONData.BASE_URL);
        
    });
    after(async () => {
        await browser.close();
    });
    afterEach(async () => {

        await page.close();
        
    });

it('Valid user login', async()=>{



  // Click input[data-test="username"]
  await page.click(HomePage.selectors.usernameTextBox);

  // Fill input[data-test="username"]
  await page.fill(HomePage.selectors.usernameTextBox, JSONData.Admin.username);

  // Click input[data-test="password"]
  await page.click(HomePage.selectors.passwordTextBox);

  // Fill input[data-test="password"]
  await page.fill(HomePage.selectors.passwordTextBox, JSONData.Admin.password);

  // Click input[data-test="login-button"]
  await page.click(HomePage.selectors.loginButton);
  //assert.equal(await page.url(), 'https://www.saucedemo.com/inventory.html');
  console.log('Current URL::: '+ await page.url());
  expect(await page.url()).contain(InventoryPage.selectors.pageURL);

  // Click text="Products"
  await page.click(InventoryPage.selectors.productsLabel);

});


it('read', async()=>{
    console.log(JSONData);
    console.log(JSONData.BASE_URL);
    console.log(JSONData.Browser);

});



})
