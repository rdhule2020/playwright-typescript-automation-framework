import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SubscriptionPage extends BasePage {
    readonly subscriptionHeading: Locator;
    readonly successMessage: Locator;
    private readonly emailInput: Locator;
    private readonly subscribeButton: Locator;

    constructor(page: Page) {
        super(page);
        this.subscriptionHeading = page.getByRole('heading', { name: 'Subscription' });
        this.emailInput = page.locator('#susbscribe_email');
        this.subscribeButton = page.locator('#subscribe');
        this.successMessage = page.locator('.alert-success');
    }

    async scrollToSubscription() {
        await this.subscriptionHeading.scrollIntoViewIfNeeded();
    }

    async subscribe(email: string) {
        await this.emailInput.fill(email);
        await this.subscribeButton.click();
    }
}
