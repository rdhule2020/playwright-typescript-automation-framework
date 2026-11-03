import {test, expect} from '../fixture/pageObjectFixture';
import { TEST_DATA } from '../testData/testData';

test.describe('Test Cases page navigation', () => {
    test('Verify Test Cases Page', async ({page, loginpage, homepage,testcasespage}) => {
        // 1. Launch browser using the Playwright page fixture.

        // 2. Open the homepage using the LoginPage POM.
        await loginpage.openApplication();

        // 3. Verify that the homepage is visible successfully.
        expect(await homepage.isHomePageExists()).toBe(true);
        await expect(page).toHaveTitle('Automation Exercise');

        // 4. Click the Test Cases link using the shared header POM.
        await homepage.header.link_TestCases.first().click();

        // 5. Verify the Test Cases page is displayed successfully.
        await expect(page).toHaveURL(TEST_DATA.urls.testcases);
        expect(await testcasespage.isTestCasesTitleExist()).toBe(true);
        
    });
});