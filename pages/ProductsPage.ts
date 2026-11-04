import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
    private readonly allProductsHeading: Locator;
    private readonly productCards: Locator;
    private readonly firstProductViewLink: Locator;
    private readonly searchInput: Locator;
    private readonly searchButton: Locator;
    searchedProductsHeading: Locator;

    constructor(page: Page) {
        super(page);
        this.allProductsHeading = page.getByRole('heading', { name: 'All Products' });
        this.productCards = page.locator('.features_items .col-sm-4');
        this.firstProductViewLink = this.productCards.first().getByRole('link', { name: 'View Product' });
        this.searchInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.searchedProductsHeading = page.getByRole('heading', {
            name: 'Searched Products',
            exact: true
        });
    }

    async isAllProductsPageVisible(): Promise<boolean> {
        return await this.allProductsHeading.isVisible();
    }

    async isProductListVisible(): Promise<boolean> {
        return await this.productCards.first().isVisible();
    }

    async getProductCount(): Promise<number> {
        return await this.productCards.count();
    }

    async viewFirstProduct(): Promise<void> {
        await this.firstProductViewLink.click();
    }

    async searchForProduct(productName: string): Promise<void> {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    async isSearchedProductsHeadingVisible(): Promise<boolean> {
        return await this.searchedProductsHeading.isVisible();
    }

    async areSearchResultsMatching(productName: string): Promise<boolean> {
        const productCount = await this.productCards.count();

        if (productCount === 0) {
            return false;
        }

        for (let index = 0; index < productCount; index++) {
            const resultName = await this.productCards
                .nth(index)
                .locator('.productinfo p')
                .first()
                .innerText();

            if (!resultName.toLowerCase().includes(productName.toLowerCase())) {
                return false;
            }
        }

        return true;
    }
}