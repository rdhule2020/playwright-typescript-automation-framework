import {Locator, Page} from '@playwright/test';
import {BasePage} from './BasePage';

export class ProductsPage extends BasePage {
    private readonly allProductsHeading: Locator;
    private readonly productCards: Locator;
    private readonly firstProductViewLink: Locator;

    constructor(page: Page) {
        super(page);
        this.allProductsHeading = page.getByRole('heading', {name: 'All Products'});
        this.productCards = page.locator('.features_items .col-sm-4');
        this.firstProductViewLink = this.productCards.first().getByRole('link', {name: 'View Product'});
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
}