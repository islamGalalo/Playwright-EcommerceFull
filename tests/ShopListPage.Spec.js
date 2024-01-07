import { test } from '@playwright/test'
import { ShopListPage } from '../Pages/ShopListPage';


 
    test('verify user can choose product ', async ({page}) => {
        const shopList = new ShopListPage(page);
        await shopList.goto();
        await shopList.search();
        await shopList.chooseProduct();
        await page.waitForTimeout(3000)
        await shopList.choose2ndProduct();
        await shopList.goToCart();
     
    
    });