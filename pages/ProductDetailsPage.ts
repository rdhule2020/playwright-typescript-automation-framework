import {Locator, Page} from '@playwright/test';
import {BasePage} from './BasePage';

export class ProductDetailsPage extends BasePage {
    private readonly productName: Locator;
    private readonly category: Locator;
    private readonly price: Locator;
    private readonly availability: Locator;
    private readonly condition: Locator;
    private readonly brand: Locator;

    constructor(page: Page) {
        super(page);
        const productInformation = page.locator('.product-information');

        this.productName = productInformation.getByRole('heading', {level: 2});
        this.category = productInformation.locator('p').filter({hasText: 'Category:'});
        this.price = productInformation.getByText(/^Rs\.\s*\d+$/);
        this.availability = productInformation.locator('p').filter({hasText: 'Availability:'});
        this.condition = productInformation.locator('p').filter({hasText: 'Condition:'});
        this.brand = productInformation.locator('p').filter({hasText: 'Brand:'});
    }

    async isProductNameVisible(): Promise<boolean> {
        return await this.productName.isVisible();
    }

    async isCategoryVisible(): Promise<boolean> {
        return await this.category.isVisible();
    }

    async isPriceVisible(): Promise<boolean> {
        return await this.price.isVisible();
    }

    async isAvailabilityVisible(): Promise<boolean> {
        return await this.availability.isVisible();
    }

    async isConditionVisible(): Promise<boolean> {
        return await this.condition.isVisible();
    }

    async isBrandVisible(): Promise<boolean> {
        return await this.brand.isVisible();
    }
}