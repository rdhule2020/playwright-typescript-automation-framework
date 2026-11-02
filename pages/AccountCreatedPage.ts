import { BasePage } from "./BasePage";
import { Locator, Page } from '@playwright/test'

export class AccountCreated extends BasePage {

    //locators
    private readonly btn_continue: Locator;
    private readonly accountCreatedText: Locator

    //constructor
    constructor(page: Page) {
        super(page)
        this.btn_continue = page.getByRole('link', { name: 'Continue' });
        this.accountCreatedText = page.getByText('Account Created!', { exact: true }).first();

    }

    async clickContinue() {
        await this.btn_continue.click();
    }

    async isAccountCreated(): Promise<boolean> {
        return await this.accountCreatedText.isVisible();
    }

}