import {test, expect} from '../fixture/pageObjectFixture';


test('Login Test', async({page, loginpage, homepage})=>{
    await loginpage.openApplication();
    await loginpage.performLogin();
    expect(await homepage.checkLoggedInAs()).toBe(true);
    await homepage.performLogout();
    expect(await homepage.isHomePageExists()).toBe(true);

})