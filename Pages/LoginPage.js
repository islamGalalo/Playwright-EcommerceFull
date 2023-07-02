const { expect } = require('@playwright/test');
 exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.clkLogin = page.locator("//div[@class='panel header']//a[contains(text(),'Sign In')]");
        this.loginEmail = page.locator("#email");
        this.loginPass = page.locator('#pass');
        this.submit = page.locator("//button[@id='send2'][@type='submit']").first();
     //  this.loginWelcome = page.locator("div[class='panel header'] span[class='logged-in']").textContent();
    }

    async goto() {
        await this.page.goto('https://magento.softwaretestingboard.com/');

    }

    async Login() {
        await this.clkLogin.click()
        await this.loginEmail.fill('isla@g.com');
        await this.loginPass.fill('Is123@g');
        await this.submit.click();
      //  await expect(this.loginWelcome).toContain('Welcome');
        



    }


}