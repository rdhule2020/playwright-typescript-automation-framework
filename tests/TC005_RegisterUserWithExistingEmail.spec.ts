import {test, expect} from '../fixture/pageObjectFixture';

test('Verify user registration with existing email', async({page, loginpage, homepage})=>{
    await loginpage.openApplication();
    expect(await homepage.isHomePageExists()).toBe(true);
    await homepage.header.clickSignUpLogin();
    expect(await loginpage.newUserSignupText()).toBe(true);
    await loginpage.SignUpWithExistingUser();
    expect(await loginpage.siguUpErrorMessage()).toBe(true);
    expect(await loginpage.signUpError()).toContain('Email Address already exist!');


} )