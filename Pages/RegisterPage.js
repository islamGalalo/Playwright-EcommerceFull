const { test , expect } = require('@playwright/test');
 
exports.RegisterPage = class RegisterPage {
    constructor(page) {
        this.page = page;
        this.newRegistration = page.locator("//div[@class='panel header']//a[normalize-space()='Create an Account']");
        this.firstName = page.locator("[id='firstname']");
        this.lastName = page.locator("#lastname");
        this.newsSubscribtion = page.locator("#is_subscribed");
        this.email = page.locator("//input[@id='email_address']");
        this.password = page.locator("#password");
        this.confirmPass = page.locator("#password-confirmation");
        this.cLKCreateBtn = page.locator("//button[@title='Create an Account']");
       this.successMsg = page.locator("//div[@class='message-success success message']") ;
       


    }

    async goto() {
        await this.page.goto('https://magento.softwaretestingboard.com/');

    }

    async registration() {
        await this.newRegistration.click();
        await this.firstName.fill("islam");
        await this.lastName.fill("galal");
        await this.newsSubscribtion.check();
        await this.email.fill("isla@g.com");
        await this.password.fill("Is123@g");
        await this.confirmPass.fill("Is123@g");
        await this.cLKCreateBtn.click();
     
       await expect(this.successMsg).toContainText('Thank you for registering with Main Website Store.')
        





    }


}