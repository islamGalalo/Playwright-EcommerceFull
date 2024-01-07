exports.CheckoutPage = class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.proceedCheckout = page.locator("//button[@data-role='proceed-to-checkout']");
        this.shipFirstName = page.locator("[name=firstname]");
        this.shipLastName = page.locator("[name=lastname]");
        this.shipAddress = page.getByLabel('Street Address: Line 1');
        this.shipCity = page.locator("[name=city]");
        this.shipSelectState = page.locator("[name=region_id]");
        this.shipPostalCode = page.locator("[name=postcode]");
        this.shipCountry = page.locator("[name=country_id]");
        this.shipPhoneNo = page.locator("[name=telephone]");
        this.checkShipMethod = page.locator("//input[@name='ko_unique_1']");
    }
    async proceed() {
        await this.proceedCheckout.click();
    }
    async shipping() {
        await this.shipFirstName.type("isla")
        await this.shipLastName.type("galal")
        await this.shipAddress.type("sphunix")
        await this.shipCity.type("cairo")
        await this.shipSelectState.selectOption('Ohio');
        await this.shipPostalCode.type("514854")
        await this.shipCountry.selectOption('United States');
        await this.shipPhoneNo.type("155151654")
        await this.checkShipMethod.check();

    }
}