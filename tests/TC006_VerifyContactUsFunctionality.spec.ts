import {test, expect} from '../fixture/pageObjectFixture'
import { TEST_DATA } from '../testData/testData';


test('Verify Contact Us feature', async({page, loginpage, homepage, contactus})=>{

    await loginpage.openApplication();
    expect(await homepage.isHomePageExists()).toBe(true);
    await loginpage.header.selectContactUs();
    expect(await contactus.getHeaderMessage()).toContain('GET IN TOUCH');
    await contactus.fillContactUsForm(
        TEST_DATA.ContactUs.name, 
        TEST_DATA.ContactUs.email, 
        TEST_DATA.ContactUs.subject, 
        TEST_DATA.ContactUs.message
    );
    await contactus.uploadFile(`F:\\Automation_Workspace\\PWFramework_AutomationExercise\\uploads\\sample.txt`)
    await contactus.clickSubmitButton();
    expect(await contactus.IsSuccessMessageDisplayed()).toBe(true);
})