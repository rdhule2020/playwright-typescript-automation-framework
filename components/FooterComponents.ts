import {Locator, Page} from '@playwright/test';

export class FooterComponent{

    private readonly page:Page;
    subscriptionHeading: Locator;
    private readonly footer :Locator;
    private readonly emailInput : Locator;
    private readonly subscribeButton: Locator;
    successMessage: Locator;

    constructor(page:Page){
        this.page =page;
        this.footer=page.locator('#footer');
        this.subscriptionHeading = page.getByRole('heading', { name: 'Subscription' });
        this.emailInput = page.getByRole('textbox', { name: 'Your email address' });
        this.subscribeButton = page.locator('#subscribe');
        this.successMessage = page.getByText('You have been successfully subscribed!');

    }

     async scrollIntoFooter(){
        await this.footer.scrollIntoViewIfNeeded();
    }

    async subscribe(email: string) {
        await this.emailInput.fill(email);
        await this.subscribeButton.click();
    }
}