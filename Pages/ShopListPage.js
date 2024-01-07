exports.ShopListPage = class ShopListPage {
    constructor(page) {
        this.page = page;
        this.searchbox = page.locator("#search");
        this.productSelect = page.getByRole('link', { name: 'Lando Gym Jacket' }).first();
        this.sizeSelect = page.getByRole('option', { name: 'L', exact: true });
        this.colorSelect = page.getByRole('option', { name: 'Gray' });
        this.addToCart = page.getByRole('button', { name: 'Add to Cart' });
        this.addSuccessMsg = page.locator("//div[@class='message-success success message']");
        this.addSecondProduct = page.locator("//img[@alt='Abominable Hoodie']")
        this.size2ndSelect = page.getByRole('option', { name: 'XL' });
        this.color2ndSelect = page.getByRole('option', { name: 'Red' });
        this.add2ndToCart = page.getByRole('button', { name: 'Add to Cart' });
        this.toCart = page.locator("//span[@class='counter-number']");
        this.cartview = page.locator("//span[normalize-space()='View and Edit Cart']");

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
        
    

    }
    async choose2ndProduct() {
        await this.addSecondProduct.click();
        await this.size2ndSelect.click();
        await this.color2ndSelect.click();
        await this.add2ndToCart.click();



    }
    async goToCart() {
        await this.toCart.click();
        await this.cartview.click();
    }

}