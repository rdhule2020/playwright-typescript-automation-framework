import {Page, expect, Locator} from "@playwright/test";
import { BasePage } from "./BasePage";
import { TEST_DATA } from "../testData/testData";

export class SignUpPage extends BasePage{


    //Locators
    private readonly radio_Mr: Locator;
    private readonly radio_Mrs: Locator;
    private readonly inputPassword : Locator;
    //DOB
    private readonly selectDay : Locator;
    private readonly selectMonth : Locator;
    private readonly selectYear : Locator;

    private readonly check_SignUpNewsLetter : Locator;
    private readonly check_SpecialOffers :Locator;
    private readonly inputFirstName: Locator;
    private readonly inputLastName: Locator;
    private readonly inputCompany : Locator;
    private readonly inputAddress1: Locator;
    private readonly inputAddress2 : Locator;
    private readonly drp_Country : Locator;
    private readonly inputState : Locator;
    private readonly inputCity : Locator;
    private readonly inputZipcode : Locator;
    private readonly inputMobileNo : Locator;
    private readonly btn_CreateAccount : Locator;



    //constructor
    constructor(page:Page){
        super(page);
        this.radio_Mr = page.getByRole('radio',{name:'Mr.'});
        this.radio_Mrs = page.getByRole('radio',{name:'Mrs.'});
        this.inputPassword = page.getByRole('textbox', { name: 'Password *' }) //page.getByLabel("Password") 
        this.selectDay = page.locator('#days');
        this.selectMonth = page.locator('#months');
        this.selectYear = page.locator(`#years`);
        this.check_SignUpNewsLetter = page.getByRole('checkbox',{name:'Sign up for our newsletter!'})
        this.check_SpecialOffers = page.getByRole('checkbox',{name:"Receive special offers from our partners!"})
        this.inputFirstName = page.getByRole('textbox',{name:'First name *'})
        this.inputLastName = page.getByLabel('Last name *')
        this.inputCompany = page.getByLabel('Company', { exact: true })
        this.inputAddress1 = page.getByRole('textbox',{name:'Address * (Street address, P.O. Box, Company name, etc.)'})
        this.inputAddress2 = page.getByRole('textbox',{name:'Address 2'});
        this.drp_Country = page.getByRole('combobox',{name:'Country *'})  //page.getByLabel('Country *') //
        this.inputState = page.getByRole('textbox', {name: 'State *'});
        this.inputCity = page.getByLabel('City *');
        this.inputZipcode = page.locator('#zipcode')  // here city is parent element , use css locator
        this.inputMobileNo = page.getByLabel('Mobile Number *');
        this.btn_CreateAccount = page.getByRole('button',{name:'Create Account'})
    }

    //Action Methods :
    //check : Is signup page exist
    async isSignUpPageExist(){
        let title:string = await this.page.title();
            if(title)
            {
                return true
            }
            return false;
    }

    // Action methods for locators
    async selectMale(){
       await this.radio_Mr.check();
    }

    async selectFemale()
    {
        await this.radio_Mrs.check();
    }

    async enterPassword(pass:string)
    {
        await this.inputPassword.fill(pass);
    }

    async enterDay(day:string){
        await this.selectDay.selectOption(day)
    }
    
    async enterMonth(month:string){
        await this.selectMonth.selectOption({label:month})
    }
    
    async enterYear(value:string){
        await this.selectYear.selectOption(value)
    }

    async signUpForNewsLater(){
        await this.check_SignUpNewsLetter.check();
    }

    async specialOffers(){
        await this.check_SpecialOffers.check();
    }

    async enterFirstName(firstname:string){
        await this.inputFirstName.fill(firstname);
    }

    async enterLastName(lastname:string){
        await this.inputLastName.fill(lastname);
    }

    async enterCompany(company:string){
        await this.inputCompany.fill(company);
    }

    async enterAddress(address:string){
        await this.inputAddress1.fill(address);
    }

    async enterAddressLine2(addressline2:string){
         await this.inputAddress1.fill(addressline2);
    }

    async selectCountry(country:string){
        await this.drp_Country.selectOption({label:country});
    }

    async enterState(state:string){
        await this.inputState.fill(state);
    }

    async enterCity(city:string){
        await this.inputCity.fill(city);
    }

    async enterZipCode(zipcode:string){
        await this.inputZipcode.fill(zipcode);
    }

    async enterMobileNo(mobNo:string){
        await this.inputMobileNo.fill(mobNo);
    }

    async clickCreateAccount(){
        await this.btn_CreateAccount.click();
    }


    // async completeRegistration( ){
    //     await this.selectMale();
    //     await this.enterPassword(TEST_DATA.user.pass);
    //     await this.enterDay(TEST_DATA.userdetails.day);
        
    // }

}