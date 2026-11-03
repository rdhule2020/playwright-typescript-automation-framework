import {test, expect} from '../fixture/pageObjectFixture';
import {TEST_DATA} from '../testData/testData';

test('Verify All Products and product detail page', async ({
    page,
    loginpage,
    homepage,
    productspage,
    productdetailspage
}) => {
    // 1. Launch browser using the Playwright page fixture.

    // 2. Navigate to the Automation Exercise homepage.
    await loginpage.openApplication();

    // 3. Verify that the home page is visible successfully.
    expect(await homepage.isHomePageExists()).toBe(true);
    await expect(page).toHaveTitle('Automation Exercise');

    // 4. Click on the Products button using the shared header POM.
    await homepage.header.selectProducts();

    // 5. Verify the user is navigated to the All Products page successfully.
    await expect(page).toHaveURL(new RegExp(`${TEST_DATA.urls.products}$`));
    expect(await productspage.isAllProductsPageVisible()).toBe(true);

    // 6. Verify that the products list is visible.
    expect(await productspage.isProductListVisible()).toBe(true);
    expect(await productspage.getProductCount()).toBeGreaterThan(0);

    // 7. Click View Product for the first product in the list.
    await productspage.viewFirstProduct();

    // 8. Verify the user is on the product detail page.
    await expect(page).toHaveURL(/\/product_details\/\d+$/);

    // 9. Verify the product details are visible.
    expect(await productdetailspage.isProductNameVisible()).toBe(true);
    expect(await productdetailspage.isCategoryVisible()).toBe(true);
    expect(await productdetailspage.isPriceVisible()).toBe(true);
    expect(await productdetailspage.isAvailabilityVisible()).toBe(true);
    expect(await productdetailspage.isConditionVisible()).toBe(true);
    expect(await productdetailspage.isBrandVisible()).toBe(true);
});