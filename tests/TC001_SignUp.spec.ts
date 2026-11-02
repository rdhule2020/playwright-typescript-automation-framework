import {test, expect} from '../fixture/pageObjectFixture';
import { TEST_DATA } from '../testData/testData';


test("SignUp Test", async({page, loginpage, homepage,signuppage,acccreatedpage,deleteaccountpage})=>{
    await loginpage.openApplication();
    await homepage.isHomePageExists()
    await homepage.header.clickSignUpLogin();
    await loginpage.performSignUp();
    await signuppage.selectMale();
    await signuppage.enterPassword(TEST_DATA.user.pass);
    await signuppage.enterDay(TEST_DATA.userdetails.day);
    await signuppage.enterMonth(TEST_DATA.userdetails.month);
    await signuppage.enterYear(TEST_DATA.userdetails.year);
    await signuppage.signUpForNewsLater();
    await signuppage.specialOffers();
    await signuppage.enterFirstName(TEST_DATA.user.firstname);
    await signuppage.enterLastName(TEST_DATA.user.lastname);
    await signuppage.enterCompany(TEST_DATA.user.company);
    await signuppage.enterAddress(TEST_DATA.userdetails.address);
    await signuppage.enterAddressLine2(TEST_DATA.userdetails.address);
    await signuppage.selectCountry(TEST_DATA.userdetails.country);
    await signuppage.enterState(TEST_DATA.userdetails.state);
    await signuppage.enterCity(TEST_DATA.userdetails.city);
    await signuppage.enterZipCode(TEST_DATA.userdetails.zipcode);
    await signuppage.enterMobileNo(TEST_DATA.userdetails.mobNo)
    await signuppage.clickCreateAccount();
    expect(await acccreatedpage.isAccountCreated()).toBe(true);
    await acccreatedpage.clickContinue();
    expect( await homepage.checkLoggedInAs()).toBe(true);
    await homepage.deleteAcccount();
    expect(await deleteaccountpage.deleteAccountText()).toBe(true);
})


