# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC001_SignUp.spec.ts >> SignUp Test
- Location: tests\TC001_SignUp.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('radio', { name: 'Mr.' })

```

# Page snapshot

```yaml
- generic [active] [ref=f17e1]:
  - banner [ref=f17e2]:
    - generic [ref=f17e5]:
      - link [ref=f17e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f17e9]
      - list [ref=f17e12]:
        - listitem [ref=f17e13]:
          - link " Home" [ref=f17e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f17e15]: 
            - text: Home
        - listitem [ref=f17e16]:
          - link " Products" [ref=f17e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f17e18]: 
            - text: Products
        - listitem [ref=f17e19]:
          - link " Cart" [ref=f17e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f17e21]: 
            - text: Cart
        - listitem [ref=f17e22]:
          - link " Signup / Login" [ref=f17e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f17e24]: 
            - text: Signup / Login
        - listitem [ref=f17e25]:
          - link " Test Cases" [ref=f17e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f17e27]: 
            - text: Test Cases
        - listitem [ref=f17e28]:
          - link " API Testing" [ref=f17e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f17e30]: 
            - text: API Testing
        - listitem [ref=f17e31]:
          - link " Video Tutorials" [ref=f17e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f17e33]: 
            - text: Video Tutorials
        - listitem [ref=f17e34]:
          - link " Contact us" [ref=f17e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f17e36]: 
            - text: Contact us
  - generic [ref=f17e39]:
    - generic [ref=f17e41]:
      - heading "Login to your account" [level=2] [ref=f17e42]
      - generic [ref=f17e43]:
        - textbox "Email Address" [ref=f17e44]
        - textbox "Password" [ref=f17e45]
        - button "Login" [ref=f17e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=f17e48]
    - generic [ref=f17e50]:
      - heading "New User Signup!" [level=2] [ref=f17e51]
      - generic [ref=f17e52]:
        - textbox "Name" [ref=f17e53]: auto3
        - textbox "Email Address" [ref=f17e54]: autouser3@gmail.com
        - paragraph [ref=f17e55]: Email Address already exist!
        - button "Signup" [ref=f17e56] [cursor=pointer]
  - contentinfo [ref=f17e57]:
    - generic [ref=f17e62]:
      - heading "Subscription" [level=2] [ref=f17e63]
      - generic [ref=f17e64]:
        - textbox "Your email address" [ref=f17e65]
        - button "" [ref=f17e66] [cursor=pointer]
        - paragraph [ref=f17e68]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f17e72]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=f17e74]:
    - generic [ref=f17e77]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=f17e79]: Discover more
      - link "Secure Login Solutions" [ref=f17e80] [cursor=pointer]
      - link "User Authentication Services" [ref=f17e85] [cursor=pointer]
      - link "Automation Software Tools" [ref=f17e90] [cursor=pointer]
```

# Test source

```ts
  1   | import {Page, expect, Locator} from "@playwright/test";
  2   | import { BasePage } from "./BasePage";
  3   | import { TEST_DATA } from "../testData/testData";
  4   | 
  5   | export class SignUpPage extends BasePage{
  6   | 
  7   | 
  8   |     //Locators
  9   |     private readonly radio_Mr: Locator;
  10  |     private readonly radio_Mrs: Locator;
  11  |     private readonly inputPassword : Locator;
  12  |     //DOB
  13  |     private readonly selectDay : Locator;
  14  |     private readonly selectMonth : Locator;
  15  |     private readonly selectYear : Locator;
  16  | 
  17  |     private readonly check_SignUpNewsLetter : Locator;
  18  |     private readonly check_SpecialOffers :Locator;
  19  |     private readonly inputFirstName: Locator;
  20  |     private readonly inputLastName: Locator;
  21  |     private readonly inputCompany : Locator;
  22  |     private readonly inputAddress1: Locator;
  23  |     private readonly inputAddress2 : Locator;
  24  |     private readonly drp_Country : Locator;
  25  |     private readonly inputState : Locator;
  26  |     private readonly inputCity : Locator;
  27  |     private readonly inputZipcode : Locator;
  28  |     private readonly inputMobileNo : Locator;
  29  |     private readonly btn_CreateAccount : Locator;
  30  | 
  31  | 
  32  | 
  33  |     //constructor
  34  |     constructor(page:Page){
  35  |         super(page);
  36  |         this.radio_Mr = page.getByRole('radio',{name:'Mr.'});
  37  |         this.radio_Mrs = page.getByRole('radio',{name:'Mrs.'});
  38  |         this.inputPassword = page.getByRole('textbox', { name: 'Password *' }) //page.getByLabel("Password") 
  39  |         this.selectDay = page.locator('#days');
  40  |         this.selectMonth = page.locator('#months');
  41  |         this.selectYear = page.locator(`#years`);
  42  |         this.check_SignUpNewsLetter = page.getByRole('checkbox',{name:'Sign up for our newsletter!'})
  43  |         this.check_SpecialOffers = page.getByRole('checkbox',{name:"Receive special offers from our partners!"})
  44  |         this.inputFirstName = page.getByRole('textbox',{name:'First name *'})
  45  |         this.inputLastName = page.getByLabel('Last name *')
  46  |         this.inputCompany = page.getByLabel('Company', { exact: true })
  47  |         this.inputAddress1 = page.getByRole('textbox',{name:'Address * (Street address, P.O. Box, Company name, etc.)'})
  48  |         this.inputAddress2 = page.getByRole('textbox',{name:'Address 2'});
  49  |         this.drp_Country = page.getByRole('combobox',{name:'Country *'})  //page.getByLabel('Country *') //
  50  |         this.inputState = page.getByRole('textbox', {name: 'State *'});
  51  |         this.inputCity = page.getByLabel('City *');
  52  |         this.inputZipcode = page.locator('#zipcode')  // here city is parent element , use css locator
  53  |         this.inputMobileNo = page.getByLabel('Mobile Number *');
  54  |         this.btn_CreateAccount = page.getByRole('button',{name:'Create Account'})
  55  |     }
  56  | 
  57  |     //Action Methods :
  58  |     //check : Is signup page exist
  59  |     async isSignUpPageExist(){
  60  |         let title:string = await this.page.title();
  61  |             if(title)
  62  |             {
  63  |                 return true
  64  |             }
  65  |             return false;
  66  |     }
  67  | 
  68  |     // Action methods for locators
  69  |     async selectMale(){
> 70  |        await this.radio_Mr.check();
      |                            ^ Error: locator.check: Test timeout of 30000ms exceeded.
  71  |     }
  72  | 
  73  |     async selectFemale()
  74  |     {
  75  |         await this.radio_Mrs.check();
  76  |     }
  77  | 
  78  |     async enterPassword(pass:string)
  79  |     {
  80  |         await this.inputPassword.fill(pass);
  81  |     }
  82  | 
  83  |     async enterDay(day:string){
  84  |         await this.selectDay.selectOption(day)
  85  |     }
  86  |     
  87  |     async enterMonth(month:string){
  88  |         await this.selectMonth.selectOption({label:month})
  89  |     }
  90  |     
  91  |     async enterYear(value:string){
  92  |         await this.selectYear.selectOption(value)
  93  |     }
  94  | 
  95  |     async signUpForNewsLater(){
  96  |         await this.check_SignUpNewsLetter.check();
  97  |     }
  98  | 
  99  |     async specialOffers(){
  100 |         await this.check_SpecialOffers.check();
  101 |     }
  102 | 
  103 |     async enterFirstName(firstname:string){
  104 |         await this.inputFirstName.fill(firstname);
  105 |     }
  106 | 
  107 |     async enterLastName(lastname:string){
  108 |         await this.inputLastName.fill(lastname);
  109 |     }
  110 | 
  111 |     async enterCompany(company:string){
  112 |         await this.inputCompany.fill(company);
  113 |     }
  114 | 
  115 |     async enterAddress(address:string){
  116 |         await this.inputAddress1.fill(address);
  117 |     }
  118 | 
  119 |     async enterAddressLine2(addressline2:string){
  120 |          await this.inputAddress1.fill(addressline2);
  121 |     }
  122 | 
  123 |     async selectCountry(country:string){
  124 |         await this.drp_Country.selectOption({label:country});
  125 |     }
  126 | 
  127 |     async enterState(state:string){
  128 |         await this.inputState.fill(state);
  129 |     }
  130 | 
  131 |     async enterCity(city:string){
  132 |         await this.inputCity.fill(city);
  133 |     }
  134 | 
  135 |     async enterZipCode(zipcode:string){
  136 |         await this.inputZipcode.fill(zipcode);
  137 |     }
  138 | 
  139 |     async enterMobileNo(mobNo:string){
  140 |         await this.inputMobileNo.fill(mobNo);
  141 |     }
  142 | 
  143 |     async clickCreateAccount(){
  144 |         await this.btn_CreateAccount.click();
  145 |     }
  146 | 
  147 | 
  148 |     // async completeRegistration( ){
  149 |     //     await this.selectMale();
  150 |     //     await this.enterPassword(TEST_DATA.user.pass);
  151 |     //     await this.enterDay(TEST_DATA.userdetails.day);
  152 |         
  153 |     // }
  154 | 
  155 | }
```