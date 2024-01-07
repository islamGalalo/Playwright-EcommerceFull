import { test , expect } from '@playwright/test'
import { CheckoutPage } from '../Pages/CheckoutPage';
import { ShopListPage } from '../Pages/ShopListPage';
 
    test('verify user can proceed', async ({page}) => {
        const checkout = new CheckoutPage(page);
        const shopList = new ShopListPage(page);
         await shopList.goto();
        await shopList.search();
        await shopList.chooseProduct();
        await shopList.choose2ndProduct();
        await shopList.goToCart();
        await page.waitForTimeout(2000)
        await checkout.proceed();
        await checkout.shipping();
     
    
    });