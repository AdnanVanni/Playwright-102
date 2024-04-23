import { test, expect} from '@playwright/test'
import { Page } from 'playwright';
const { chromium } = require('playwright')
import { describe } from 'mocha';

/*
test.use(
    {
browserName: "chromium"
    }
)
const capabilities = {
    browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    browserVersion: "latest",
    "LT:Options": {
        platform: "Windows 10",
        build: "Playwright Test Build",
        name: "Playwright Test",
        user: 'adnanvanni@gmail.com',
        accessKey: 'echqGFvvP1k25jX84z3OfKvZ5LftZdx17AU2fnHUeLY9KaAaEr',
        network: true,
        video: true,
        console: true,
        tunnel: false, // Add tunnel configuration if testing locally hosted webpage
        tunnelName: "", // Optional
        geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    },
};


*/

test.describe("tes suite",()=>{


    test("Test Scneario 1",async ({page}) => {

        await page.goto('https://www.lambdatest.com/selenium-playground/')
        await page.getByText('Simple Form Demo').click()
        await expect(page).toHaveURL(/simple-form-demo/);
        const message="Welcome to LambdaTest"
        await page.fill('#user-message',message)
        await page.locator('#showInput').click()
       const loc= await page.locator('#message').textContent()
       await expect(loc).toEqual(message);
      
    })
    
    test("Test Scneario 2",async ({page}) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/')
        await page.getByText('Drag & Drop Sliders').click()
        
    
       // await page.waitForSelector("(//input[@type='range'][@value=15]");
        const s = await page.locator('//input[@value=15]')
        const ele = page.locator('#rangeSuccess')
        let text = await ele.textContent()
        console.log('Initial text: ' + text);
        let targetAmount = "95";
        let isCompleted = false;
        if (s) {
            while (!isCompleted) {
                let srcBound = await s.boundingBox();
                if (srcBound) {
                    await page.mouse.move(srcBound.x + srcBound.width/2 ,
                        srcBound.y + srcBound.height / 2)
                    await page.mouse.down();
                    await page.mouse.move(srcBound.x + 463, srcBound.y + srcBound.height / 2);
                    await page.mouse.up();
                    let text = await ele.textContent();
                    console.log(text)
                    if (text == targetAmount) {
                        isCompleted = true;
                    }
                    
                }
                text = await ele.textContent()
                expect(text).toEqual('95')
            }
        }
        await page.close();
       
    
    })
    
    test("Test Scneario 3",async ({page}) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/')
        await page.getByText('Input Form Submit').click()
        await page.getByText('Submit').click()
        await page.locator('#name').isVisible()
        await page.fill('#name',"myName")
        await page.fill('#inputEmail4',"a@b.com")
        await page.fill('//input[@type=\'password\']',"pass@123")
        await page.fill('#company',"my Comp Name")
        await page.fill('#websitename',"abcdef.com")
        await page.locator("[name='country']").selectOption("IN")
       
        await page.fill('#inputCity',"Srinagar")
        await page.fill('#inputAddress1',"address 1")
        await page.fill('#inputAddress2',"address 2")
        await page.fill('#inputState',"jk")
        await page.fill('#inputZip','10001')
        await page.getByText('Submit').click()
    
       const b= await page.locator('p:has-text("shortly")')
    
    
      
        await expect(b).toContainText("Thanks for contacting us, we will get back to you shortly.")
        await page.close();
       
    })
    
    


})

