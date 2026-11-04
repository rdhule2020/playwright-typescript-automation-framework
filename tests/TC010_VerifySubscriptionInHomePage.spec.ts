import { test, expect } from '../fixture/pageObjectFixture';
import { TEST_DATA } from '../testData/testData';

test.describe('Verify Subscription in home page', () => {
    test('Verify Subscription in home page', async ({ page, loginpage, subscriptionpage }) => {
        // 1. Launch browser using the Playwright page fixture.

        // 2. Navigate to the Automation Exercise home page.
        await loginpage.openApplication();

        // 3. Verify that the home page is visible successfully.
        await expect(page).toHaveTitle('Automation Exercise');

        // 4. Scroll down to the footer.
        await subscriptionpage.scrollToSubscription();

        // 5. Verify the 'SUBSCRIPTION' text.
        await expect(subscriptionpage.subscriptionHeading).toBeVisible();

        // 6. Enter an email address in the subscription input and click the arrow button.
        //const subscriptionEmail = `subscription-${Date.now()}@example.com`;
        await subscriptionpage.subscribe(TEST_DATA.user.email);

        // 7. Verify the success message 'You have been successfully subscribed!' is visible.
        await expect(subscriptionpage.successMessage).toBeVisible();
    });
});
