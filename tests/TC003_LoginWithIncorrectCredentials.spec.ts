import {test, expect} from '../fixture/pageObjectFixture';

test('Login Test with invalid email and password', async({page, loginpage, homepage})=>{

    await loginpage.openApplication();
    await loginpage.invalidLogin();
    expect(await loginpage.InvalidCredentials()).toBe(true);
})