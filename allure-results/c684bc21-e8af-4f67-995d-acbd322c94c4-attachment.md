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
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('Country *')
    - locator resolved to <select required="" id="country" name="country" data-qa="country" class="form-control">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    15 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=f13e1]:
  - banner [ref=f13e2]:
    - generic [ref=f13e5]:
      - link [ref=f13e8] [cursor=pointer]:
        - /url: /
        - img "Website for practice automation" [ref=f13e9]
      - list [ref=f13e12]:
        - listitem [ref=f13e13]:
          - link " Home" [ref=f13e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f13e15]: 
            - text: Home
        - listitem [ref=f13e16]:
          - link " Products" [ref=f13e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f13e18]: 
            - text: Products
        - listitem [ref=f13e19]:
          - link " Cart" [ref=f13e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f13e21]: 
            - text: Cart
        - listitem [ref=f13e22]:
          - link " Signup / Login" [ref=f13e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f13e24]: 
            - text: Signup / Login
        - listitem [ref=f13e25]:
          - link " Test Cases" [ref=f13e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f13e27]: 
            - text: Test Cases
        - listitem [ref=f13e28]:
          - link " API Testing" [ref=f13e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f13e30]: 
            - text: API Testing
        - listitem [ref=f13e31]:
          - link " Video Tutorials" [ref=f13e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f13e33]: 
            - text: Video Tutorials
        - listitem [ref=f13e34]:
          - link " Contact us" [ref=f13e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f13e36]: 
            - text: Contact us
  - generic [ref=f13e40]:
    - generic [ref=f13e41]:
      - heading "Enter Account Information" [level=2] [ref=f13e42]
      - generic [ref=f13e43]:
        - generic [ref=f13e44]:
          - generic [ref=f13e45]: Title
          - generic [ref=f13e47]:
            - radio "Mr." [checked] [ref=f13e49]
            - text: Mr.
          - generic [ref=f13e51]:
            - radio "Mrs." [ref=f13e53]
            - text: Mrs.
        - generic [ref=f13e54]:
          - generic [ref=f13e55]:
            - text: Name
            - superscript [ref=f13e56]: "*"
          - textbox "Name *" [ref=f13e57]: auto1
        - generic [ref=f13e58]:
          - generic [ref=f13e59]:
            - text: Email
            - superscript [ref=f13e60]: "*"
          - textbox "Email *" [disabled] [ref=f13e61]: autouser1@gmail.com
        - generic [ref=f13e62]:
          - generic [ref=f13e63]:
            - text: Password
            - superscript [ref=f13e64]: "*"
          - textbox "Password *" [ref=f13e65]: Admin1234
        - generic [ref=f13e66]:
          - generic [ref=f13e67]: Date of Birth
          - generic [ref=f13e68]:
            - combobox [ref=f13e71]:
              - option "Day"
              - option "1"
              - option "2"
              - option "3"
              - option "4"
              - option "5"
              - option "6"
              - option "7"
              - option "8"
              - option "9"
              - option "10"
              - option "11"
              - option "12"
              - option "13"
              - option "14"
              - option "15"
              - option "16"
              - option "17"
              - option "18"
              - option "19"
              - option "20"
              - option "21" [selected]
              - option "22"
              - option "23"
              - option "24"
              - option "25"
              - option "26"
              - option "27"
              - option "28"
              - option "29"
              - option "30"
              - option "31"
            - combobox [ref=f13e74]:
              - option "Month"
              - option "January"
              - option "February"
              - option "March" [selected]
              - option "April"
              - option "May"
              - option "June"
              - option "July"
              - option "August"
              - option "September"
              - option "October"
              - option "November"
              - option "December"
            - combobox [ref=f13e77]:
              - option "Year"
              - option "2021"
              - option "2020" [selected]
              - option "2019"
              - option "2018"
              - option "2017"
              - option "2016"
              - option "2015"
              - option "2014"
              - option "2013"
              - option "2012"
              - option "2011"
              - option "2010"
              - option "2009"
              - option "2008"
              - option "2007"
              - option "2006"
              - option "2005"
              - option "2004"
              - option "2003"
              - option "2002"
              - option "2001"
              - option "2000"
              - option "1999"
              - option "1998"
              - option "1997"
              - option "1996"
              - option "1995"
              - option "1994"
              - option "1993"
              - option "1992"
              - option "1991"
              - option "1990"
              - option "1989"
              - option "1988"
              - option "1987"
              - option "1986"
              - option "1985"
              - option "1984"
              - option "1983"
              - option "1982"
              - option "1981"
              - option "1980"
              - option "1979"
              - option "1978"
              - option "1977"
              - option "1976"
              - option "1975"
              - option "1974"
              - option "1973"
              - option "1972"
              - option "1971"
              - option "1970"
              - option "1969"
              - option "1968"
              - option "1967"
              - option "1966"
              - option "1965"
              - option "1964"
              - option "1963"
              - option "1962"
              - option "1961"
              - option "1960"
              - option "1959"
              - option "1958"
              - option "1957"
              - option "1956"
              - option "1955"
              - option "1954"
              - option "1953"
              - option "1952"
              - option "1951"
              - option "1950"
              - option "1949"
              - option "1948"
              - option "1947"
              - option "1946"
              - option "1945"
              - option "1944"
              - option "1943"
              - option "1942"
              - option "1941"
              - option "1940"
              - option "1939"
              - option "1938"
              - option "1937"
              - option "1936"
              - option "1935"
              - option "1934"
              - option "1933"
              - option "1932"
              - option "1931"
              - option "1930"
              - option "1929"
              - option "1928"
              - option "1927"
              - option "1926"
              - option "1925"
              - option "1924"
              - option "1923"
              - option "1922"
              - option "1921"
              - option "1920"
              - option "1919"
              - option "1918"
              - option "1917"
              - option "1916"
              - option "1915"
              - option "1914"
              - option "1913"
              - option "1912"
              - option "1911"
              - option "1910"
              - option "1909"
              - option "1908"
              - option "1907"
              - option "1906"
              - option "1905"
              - option "1904"
              - option "1903"
              - option "1902"
              - option "1901"
              - option "1900"
        - generic [ref=f13e78]:
          - checkbox "Sign up for our newsletter!" [checked] [ref=f13e79]
          - text: Sign up for our newsletter!
        - generic [ref=f13e80]:
          - checkbox "Receive special offers from our partners!" [checked] [ref=f13e81]
          - text: Receive special offers from our partners!
        - heading "Address Information" [level=2] [ref=f13e82]
        - paragraph [ref=f13e83]:
          - generic [ref=f13e84]:
            - text: First name
            - superscript [ref=f13e85]: "*"
          - textbox "First name *" [ref=f13e86]: autouser1
        - paragraph [ref=f13e87]:
          - generic [ref=f13e88]:
            - text: Last name
            - superscript [ref=f13e89]: "*"
          - textbox "Last name *" [ref=f13e90]: user1
        - paragraph [ref=f13e91]:
          - generic [ref=f13e92]: Company
          - textbox "Company" [ref=f13e93]: C_demo
        - paragraph [ref=f13e94]:
          - generic [ref=f13e95]:
            - text: Address
            - superscript [ref=f13e96]: "*"
            - text: (Street address, P.O. Box, Company name, etc.)
          - textbox "Address * (Street address, P.O. Box, Company name, etc.)" [active] [ref=f13e97]: gigaplex, Airoli
        - paragraph [ref=f13e98]:
          - generic [ref=f13e99]: Address 2
          - textbox "Address 2" [ref=f13e100]
        - paragraph [ref=f13e101]:
          - generic [ref=f13e102]:
            - text: Country
            - superscript [ref=f13e103]: "*"
          - combobox "Country *" [ref=f13e104]:
            - option "India" [selected]
            - option "United States"
            - option "Canada"
            - option "Australia"
            - option "Israel"
            - option "New Zealand"
            - option "Singapore"
        - paragraph [ref=f13e105]:
          - generic [ref=f13e106]:
            - text: State
            - superscript [ref=f13e107]: "*"
          - textbox "State *" [ref=f13e108]
        - paragraph [ref=f13e109]:
          - generic [ref=f13e110]:
            - text: City
            - superscript [ref=f13e111]: "*"
          - textbox "City * Zipcode *" [ref=f13e112]
        - paragraph [ref=f13e113]:
          - generic [ref=f13e114]:
            - text: Zipcode
            - superscript [ref=f13e115]: "*"
          - textbox [ref=f13e116]
        - paragraph [ref=f13e117]:
          - generic [ref=f13e118]:
            - text: Mobile Number
            - superscript [ref=f13e119]: "*"
          - textbox "Mobile Number *" [ref=f13e120]
        - button "Create Account" [ref=f13e121] [cursor=pointer]
    - insertion [ref=f13e123]:
      - generic [ref=f13e126]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=f13e128]: Discover more
        - link "Secure Login Solutions" [ref=f13e129] [cursor=pointer]
        - link "User Authentication Services" [ref=f13e134] [cursor=pointer]
        - link "Automation Software Tools" [ref=f13e139] [cursor=pointer]
  - contentinfo [ref=f13e144]:
    - generic [ref=f13e149]:
      - heading "Subscription" [level=2] [ref=f13e150]
      - generic [ref=f13e151]:
        - textbox "Your email address" [ref=f13e152]
        - button "" [ref=f13e153] [cursor=pointer]
        - paragraph [ref=f13e155]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f13e159]: Copyright © 2021 All rights reserved
  - link "" [ref=f13e160] [cursor=pointer]:
    - /url: "#top"
  - insertion [ref=f13e163]:
    - generic [ref=f13e166]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=f13e168]: Discover more
      - link "Test Automation Platform" [ref=f13e169] [cursor=pointer]
      - link "Automation Consulting Services" [ref=f13e174] [cursor=pointer]
      - link "Business Automation Solutions" [ref=f13e179] [cursor=pointer]
```

# Test source

```ts
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
  49  |         this.drp_Country = page.getByLabel('Country *') //page.getByRole('combobox',{name:'Country *'})
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
  70  |        await this.radio_Mr.check();
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
  123 |     async selectCountry(Country:string){
> 124 |         await this.drp_Country.selectOption({label:Country});
      |                                ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
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
  148 |     async completeRegistration( ){
  149 |         await this.selectMale();
  150 |         await this.enterPassword(TEST_DATA.user.pass);
  151 |         await this.enterDay(TEST_DATA.userdetails.day);
  152 |         
  153 |     }
  154 | 
  155 | }
```