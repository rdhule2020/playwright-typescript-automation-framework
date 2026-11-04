import {Page, Locator} from '@playwright/test'


export class HeaderComponent{

    private readonly page : Page;
    private readonly link_Home : Locator;
    private readonly link_Products:Locator;
    private readonly link_Cart : Locator;
    private readonly link_SignUp_Login : Locator;
    link_TestCases:Locator;
    private readonly link_APITesting :Locator;
    private readonly link_VedioTutorials : Locator;
    private readonly link_ContactUs : Locator

    constructor(page:Page){
        this.page = page;
        this.link_Home = page.getByRole('link', {name:'Home'});
        this.link_Products = page.getByRole('link',{name:'Products'});
        this.link_Cart = page.getByRole('link',{name:'Cart'});
        this.link_SignUp_Login = page.getByRole('link',{name:'Signup / Login'});
        this.link_TestCases = page.getByRole('link',{name:'Test Cases'});
        this.link_APITesting = page.getByRole('link',{name:'API Testing'});
        this.link_VedioTutorials = page.getByRole('link',{name:'Video Tutorials'});
        this.link_ContactUs = page.getByRole('link', {name:'Contact us'})
    }

    async selectHome(){
        await this.link_Home.click();
    }

    async selectProducts(){
        await this.link_Products.click();
    }

    async selectCart(){
        await this.link_Cart.click();
    }

    //click on  SignUp/Login link
    async clickSignUpLogin():Promise<void>
    {
        try{
            await this.link_SignUp_Login.click();
        }
        catch(error)
        {
            console.log(`Exception occurred while clicking signup/login : ${error}`);
            throw error;
        }
    }

    async selectTestCases(){
        await this.link_TestCases.click();
    }

    async selectAPITesting(){
        await this.link_APITesting.click()
    }

    async selectVedioTutorials(){
        await this.link_VedioTutorials.click();
    }

    async selectContactUs(){
        await this.link_ContactUs.click();
    }
}