import {test, expect} from '../fixture/pageObjectFixture'
import { TEST_DATA } from '../testData/testData';
import { FileUploadUtils } from '../utils/fileUploadutils';

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
    const filePath = FileUploadUtils.getFilePath('sample.txt');
    await contactus.uploadFile(filePath);
    await contactus.clickSubmitButton();
    await contactus.expectSuccessMessageDisplayed();
})