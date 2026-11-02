# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC001_SignUp.spec.ts >> SignUp Test
- Location: tests\TC001_SignUp.spec.ts:5:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Test source

```ts
  48  | 
  49  |     //enter email address to login form
  50  |     async enterEmailAddress(loginEmail:string):Promise<void>
  51  |     {
  52  |         try{
  53  |            await this.txtLoginEmailAddress.fill(loginEmail);
  54  |         }
  55  |         catch(error)
  56  |         {
  57  |             console.log(`Exception occured while entering email address : ${error}`);
  58  |             throw error;
  59  |         }
  60  |     }
  61  | 
  62  |     async enterPassword(pass:string):Promise<void>
  63  |     {
  64  |         try{
  65  |             await this.txtPassword.fill(pass);
  66  |         }catch(error){
  67  |             console.log(`Exception occured while entering password : ${error}`);
  68  |             throw error;
  69  |         }
  70  |     }
  71  | 
  72  |     async clickLogin():Promise<void>
  73  |     {
  74  |         try{
  75  |            await this.btnLogin.click();
  76  |         }
  77  |         catch(error)
  78  |         {
  79  |             console.log(`Exception occured while clicking login button : ${error}`);
  80  |             throw error;
  81  |         }
  82  |     }
  83  | 
  84  |     async InvalidCredentials(){
  85  |         return await this.loginErrorText.isVisible();
  86  |     }
  87  | 
  88  |     //SignUp section
  89  |     async setName(name:string):Promise<void>
  90  |     {
  91  |         try{
  92  |             await this.txtName.fill(name);
  93  |         }catch(error)
  94  |         {
  95  |             console.log(`Exception occured while sending name : ${error}`);
  96  |             throw error;
  97  |         }
  98  |     }
  99  | 
  100 |     async setEmailAddress(SignUpEmail:string):Promise<void>
  101 |     {
  102 |         try{
  103 |            await this.txtSignUpEmail.fill(SignUpEmail);
  104 |         }
  105 |         catch(error)
  106 |         {
  107 |             console.log(`Exception occured while entering SignUp Email address : ${error}`);
  108 |             throw error;
  109 |         }
  110 |     }
  111 | 
  112 |     async clickSignup():Promise<void>
  113 |     {
  114 |         try{
  115 |            await this.btnSignup.click();
  116 |         }
  117 |         catch(error)
  118 |         {
  119 |             console.log(`Exception occured while clicking Signup button : ${error}`);
  120 |             throw error;
  121 |         }
  122 |     }
  123 | 
  124 | 
  125 |     //Perform login
  126 |     async performLogin(){
  127 |         await this.header.clickSignUpLogin();
  128 |         await this.enterEmailAddress(TEST_DATA.login.email);
  129 |         await this.enterPassword(TEST_DATA.login.pass);
  130 |         await this.clickLogin();
  131 |     }
  132 |      async invalidLogin(){
  133 |         await this.header.clickSignUpLogin();
  134 |         await this.enterEmailAddress(TEST_DATA.InvalidUserData.email);
  135 |         await this.enterPassword(TEST_DATA.InvalidUserData.pass);
  136 |         await this.clickLogin();
  137 |     }
  138 | 
  139 |     //perform Signup
  140 |     async performSignUp(){
  141 |         await this.setName(TEST_DATA.user.name);
  142 |         await this.setEmailAddress(TEST_DATA.user.email);
  143 |         await this.clickSignup();
  144 |     }
  145 | 
  146 |     
  147 |     async openApplication(){
> 148 |         await this.page.goto('/');
      |                         ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  149 |     }
  150 | }
```