const { expect } = require('@playwright/test');
exports.ShopListPage = class ShopListPage {
    constructor(page) {
        this.page = page;
        this.searchbox = page.locator("#search");
        this.productSelect = page.getByRole('link', { name: 'Lando Gym Jacket' }).first();
        this.sizeSelect = page.getByRole('option', { name: 'L', exact: true });
        this.colorSelect = page.getByRole('option', { name: 'Gray' });
        this.addToCart = page.getByRole('button', { name: 'Add to Cart' });
        this.addSuccessMsg = page.locator("//div[@class='message-success success message']");
        this.goToCart = page.locator("//a[normalize-space()='shopping cart']");


    }

    async goto() {
        await this.page.goto('https://magento.softwaretestingboard.com/');

    }

    async search() {
        await this.searchbox.fill('jacket');
        await this.searchbox.press('Enter');

    }
    async chooseProduct() {

        await this.productSelect.click();
        await this.sizeSelect.click();
        await this.colorSelect.click();
        await this.addToCart.click();
        await expect(this.addSuccessMsg).toContainText("Lando Gym Jacket")

    }
    async goToCart() {
        await this.goToCart.click();
    }

}