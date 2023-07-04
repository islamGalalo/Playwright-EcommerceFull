import { test } from '@playwright/test'
import { ShopListPage } from '../Pages/ShopListPage';
test('verify user can register ', async ({page}) => {
    const shopList = new ShopListPage(page);
    await shopList.goto();
    await shopList.search();
    await shopList.chooseProduct();
    


});
