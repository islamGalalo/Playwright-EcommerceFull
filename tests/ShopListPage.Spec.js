import { test } from '@playwright/test'
import { ShopListPage } from '../Pages/ShopListPage';
test('verify user can choose product ', async ({page}) => {
    const shopList = new ShopListPage(page);
    await shopList.goto();
    await shopList.search();
    await shopList.chooseProduct();
 


});
test ('Verify that user can add product to cart' , async({page}) =>{
    const shopList = new ShopListPage(page);
     await shopList.goToCart();



})
