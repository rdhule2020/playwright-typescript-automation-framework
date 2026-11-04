import {test, expect} from '../fixture/pageObjectFixture';
import { TEST_DATA } from '../testData/testData';

test(' Verify Subscription in Cart page', async ({page, loginpage, homepage,cartpage})=>{

    await loginpage.openApplication();
    expect(await homepage.isHomePageExists()).toBe(true);
    await homepage.header.selectCart();
    await cartpage.footer.scrollIntoFooter();
    await expect(cartpage.footer.subscriptionHeading).toBeVisible();
    await cartpage.footer.subscribe(TEST_DATA.user.email);
    await expect(cartpage.footer.successMessage).toBeVisible();
    
});