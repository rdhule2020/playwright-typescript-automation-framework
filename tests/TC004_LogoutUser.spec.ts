import {test, expect} from '../fixture/pageObjectFixture'

test('Verify Logout User', async({page, homepage, loginpage})=>{

    await loginpage.openApplication();
    expect(await homepage.isHomePageExists()).toBe(true);
    await homepage.header.clickSignUpLogin();
    expect(await loginpage.LoginToYourAccountText()).toBe(true);
    await loginpage.performLogin();
    expect(await homepage.checkLoggedInAs()).toBe(true)
    await homepage.performLogout();
    expect(await loginpage.isloginPageExist()).toBe(true);

})
