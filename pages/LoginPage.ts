import {Page, expect, Locator} from "@playwright/test"
import { BasePage } from "./BasePage";
import { TEST_DATA } from "../testData/testData";

export class LoginPage extends BasePage{
    
  
    //Locators
    //Login Section
    private readonly txtLoginEmailAddress:Locator;
    private readonly txtPassword:Locator;
    private readonly btnLogin : Locator;
    private readonly loginErrorText :Locator;
    private readonly loginTitleText :Locator;
    //Signup Section
    private readonly txtName : Locator;
    private readonly txtSignUpEmail :Locator
    private readonly btnSignup : Locator;

    //constructor
    constructor(page:Page){
        super(page);

        //login Section
        this.txtLoginEmailAddress= page.locator('[data-qa="login-email"]')
        this.txtPassword = page.getByPlaceholder('Password');
        this.btnLogin = page.getByRole('button',{name:'Login'})
        this.loginErrorText = page.getByText('Your email or password is incorrect!', { exact: true });
        this.loginTitleText = page.getByRole('heading', { name: 'Login to your account', level: 2 });

        //signup Section
        this.txtName = page.getByPlaceholder('Name');
        this.txtSignUpEmail = page.locator('[data-qa="signup-email"]');
        this.btnSignup = page.getByRole('button', {name:'Signup'})
    }
    //action methods

    //login Section
    //check logn page is exist
    async isloginPageExist():Promise<boolean>
    {
        let title:string = await this.page.title()
        if(title)
        {
            return true;
        }
        return false;
    }

    //enter email address to login form
    async enterEmailAddress(loginEmail:string):Promise<void>
    {
        try{
           await this.txtLoginEmailAddress.fill(loginEmail);
        }
        catch(error)
        {
            console.log(`Exception occured while entering email address : ${error}`);
            throw error;
        }
    }

    async enterPassword(pass:string):Promise<void>
    {
        try{
            await this.txtPassword.fill(pass);
        }catch(error){
            console.log(`Exception occured while entering password : ${error}`);
            throw error;
        }
    }

    async clickLogin():Promise<void>
    {
        try{
           await this.btnLogin.click();
        }
        catch(error)
        {
            console.log(`Exception occured while clicking login button : ${error}`);
            throw error;
        }
    }

    async InvalidCredentials(){
        return await this.loginErrorText.isVisible();
    }

    async LoginToYourAccountText(): Promise<boolean>{
        return await this.loginTitleText.isVisible();
    }

    //SignUp section
    async setName(name:string):Promise<void>
    {
        try{
            await this.txtName.fill(name);
        }catch(error)
        {
            console.log(`Exception occured while sending name : ${error}`);
            throw error;
        }
    }

    async setEmailAddress(SignUpEmail:string):Promise<void>
    {
        try{
           await this.txtSignUpEmail.fill(SignUpEmail);
        }
        catch(error)
        {
            console.log(`Exception occured while entering SignUp Email address : ${error}`);
            throw error;
        }
    }

    async clickSignup():Promise<void>
    {
        try{
           await this.btnSignup.click();
        }
        catch(error)
        {
            console.log(`Exception occured while clicking Signup button : ${error}`);
            throw error;
        }
    }


    //Perform login
    async performLogin(){
        await this.header.clickSignUpLogin();
        await this.enterEmailAddress(TEST_DATA.login.email);
        await this.enterPassword(TEST_DATA.login.pass);
        await this.clickLogin();
    }
     async invalidLogin(){
        await this.header.clickSignUpLogin();
        await this.enterEmailAddress(TEST_DATA.InvalidUserData.email);
        await this.enterPassword(TEST_DATA.InvalidUserData.pass);
        await this.clickLogin();
    }

    //perform Signup
    async performSignUp(){
        await this.setName(TEST_DATA.user.name);
        await this.setEmailAddress(TEST_DATA.user.email);
        await this.clickSignup();
    }

    
    async openApplication(){
        await this.page.goto('/');
    }
}