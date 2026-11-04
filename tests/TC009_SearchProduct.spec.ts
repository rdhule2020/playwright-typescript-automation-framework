import {test, expect} from '../fixture/pageObjectFixture';
import {TEST_DATA} from '../testData/testData';

test('Search Product', async ({page, loginpage, homepage, productspage}) => {
    await loginpage.openApplication();

    expect(await homepage.isHomePageExists()).toBe(true);
    expect(await homepage.isHomePageTitleCorrect()).toBe(true);

    await homepage.header.selectProducts();

    await expect(page).toHaveURL(TEST_DATA.urls.products);
    expect(await productspage.isAllProductsPageVisible()).toBe(true);

    await productspage.searchForProduct(TEST_DATA.search.productName);

    expect(await productspage.isSearchedProductsHeadingVisible()).toBe(true);
    expect(await productspage.isProductListVisible()).toBe(true);
    expect(await productspage.getProductCount()).toBeGreaterThan(0);
    expect(await productspage.areSearchResultsMatching(TEST_DATA.search.productName)).toBe(true);
});
