# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC001_SignUp.spec.ts >> SignUp Test
- Location: tests\TC001_SignUp.spec.ts:5:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=f34e1]:
  - banner [ref=f34e2]:
    - generic [ref=f34e5]:
      - link [ref=f34e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f34e9]
      - list [ref=f34e12]:
        - listitem [ref=f34e13]:
          - link " Home" [ref=f34e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f34e15]: 
            - text: Home
        - listitem [ref=f34e16]:
          - link " Products" [ref=f34e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f34e18]: 
            - text: Products
        - listitem [ref=f34e19]:
          - link " Cart" [ref=f34e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f34e21]: 
            - text: Cart
        - listitem [ref=f34e22]:
          - link " Signup / Login" [ref=f34e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f34e24]: 
            - text: Signup / Login
        - listitem [ref=f34e25]:
          - link " Test Cases" [ref=f34e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f34e27]: 
            - text: Test Cases
        - listitem [ref=f34e28]:
          - link " API Testing" [ref=f34e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f34e30]: 
            - text: API Testing
        - listitem [ref=f34e31]:
          - link " Video Tutorials" [ref=f34e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f34e33]: 
            - text: Video Tutorials
        - listitem [ref=f34e34]:
          - link " Contact us" [ref=f34e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f34e36]: 
            - text: Contact us
  - generic [ref=f34e40]:
    - heading "Account Deleted!" [level=2] [ref=f34e41]
    - paragraph [ref=f34e42]:
      - text: Your account has been permanently deleted!
      - link "Learn a Language" [ref=f34e43] [cursor=pointer]
    - paragraph [ref=f34e47]:
      - text: You can create new account to take advantage of member privileges to enhance your online
      - link "shopping" [ref=f34e48] [cursor=pointer]:
        - /url: "#"
      - text: experience with us.
    - link "Continue" [ref=f34e52] [cursor=pointer]:
      - /url: /
  - contentinfo [ref=f34e53]:
    - generic [ref=f34e58]:
      - heading "Subscription" [level=2] [ref=f34e59]
      - generic [ref=f34e60]:
        - textbox "Your email address" [ref=f34e61]
        - button "" [ref=f34e62] [cursor=pointer]
        - paragraph [ref=f34e64]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f34e68]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=f34e70]
```

# Test source

```ts
  1  | import {test, expect} from '../fixture/pageObjectFixture';
  2  | import { TEST_DATA } from '../testData/testData';
  3  | 
  4  | 
  5  | test("SignUp Test", async({page, loginpage, homepage,signuppage,acccreatedpage,deleteaccountpage})=>{
  6  |     await loginpage.openApplication();
  7  |     await homepage.isHomePageExists()
  8  |     await homepage.header.clickSignUpLogin();
  9  |     await loginpage.performSignUp();
  10 |     await signuppage.selectMale();
  11 |     await signuppage.enterPassword(TEST_DATA.user.pass);
  12 |     await signuppage.enterDay(TEST_DATA.userdetails.day);
  13 |     await signuppage.enterMonth(TEST_DATA.userdetails.month);
  14 |     await signuppage.enterYear(TEST_DATA.userdetails.year);
  15 |     await signuppage.signUpForNewsLater();
  16 |     await signuppage.specialOffers();
  17 |     await signuppage.enterFirstName(TEST_DATA.user.firstname);
  18 |     await signuppage.enterLastName(TEST_DATA.user.lastname);
  19 |     await signuppage.enterCompany(TEST_DATA.user.company);
  20 |     await signuppage.enterAddress(TEST_DATA.userdetails.address);
  21 |     await signuppage.enterAddressLine2(TEST_DATA.userdetails.address);
  22 |     await signuppage.selectCountry(TEST_DATA.userdetails.country);
  23 |     await signuppage.enterState(TEST_DATA.userdetails.state);
  24 |     await signuppage.enterCity(TEST_DATA.userdetails.city);
  25 |     await signuppage.enterZipCode(TEST_DATA.userdetails.zipcode);
  26 |     await signuppage.enterMobileNo(TEST_DATA.userdetails.mobNo)
  27 |     await signuppage.clickCreateAccount();
  28 |     expect(await acccreatedpage.isAccountCreated()).toBe(true);
  29 |     await acccreatedpage.clickContinue();
  30 |     expect( await homepage.checkLoggedInAs()).toBe(true);
  31 |     homepage.deleteAcccount();
> 32 |     expect(await deleteaccountpage.deleteAccountText()).toBe(true);
     |                                                         ^ Error: expect(received).toBe(expected) // Object.is equality
  33 |     
  34 | 
  35 |     
  36 | })
  37 | 
  38 | 
  39 | 
```