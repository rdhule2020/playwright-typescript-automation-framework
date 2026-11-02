# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC002_LoginTest.spec.ts >> Login Test
- Location: tests\TC002_LoginTest.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=f18e1]:
  - banner [ref=f18e2]:
    - generic [ref=f18e5]:
      - link [ref=f18e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f18e9]
      - list [ref=f18e12]:
        - listitem [ref=f18e13]:
          - link " Home" [ref=f18e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f18e15]: 
            - text: Home
        - listitem [ref=f18e16]:
          - link " Products" [ref=f18e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f18e18]: 
            - text: Products
        - listitem [ref=f18e19]:
          - link " Cart" [ref=f18e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f18e21]: 
            - text: Cart
        - listitem [ref=f18e22]:
          - link " Signup / Login" [ref=f18e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f18e24]: 
            - text: Signup / Login
        - listitem [ref=f18e25]:
          - link " Test Cases" [ref=f18e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f18e27]: 
            - text: Test Cases
        - listitem [ref=f18e28]:
          - link " API Testing" [ref=f18e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f18e30]: 
            - text: API Testing
        - listitem [ref=f18e31]:
          - link " Video Tutorials" [ref=f18e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f18e33]: 
            - text: Video Tutorials
        - listitem [ref=f18e34]:
          - link " Contact us" [ref=f18e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f18e36]: 
            - text: Contact us
  - generic [ref=f18e39]:
    - generic [ref=f18e41]:
      - heading "Login to your account" [level=2] [ref=f18e42]
      - generic [ref=f18e43]:
        - textbox "Email Address" [ref=f18e44]: autouser1@gmail.com
        - textbox "Password" [ref=f18e45]: Admin1234
        - paragraph [ref=f18e46]: Your email or password is incorrect!
        - button "Login" [ref=f18e47] [cursor=pointer]
    - heading "OR" [level=2] [ref=f18e49]
    - generic [ref=f18e51]:
      - heading "New User Signup!" [level=2] [ref=f18e52]
      - generic [ref=f18e53]:
        - textbox "Name" [ref=f18e54]
        - textbox "Email Address" [ref=f18e55]
        - button "Signup" [ref=f18e56] [cursor=pointer]
  - contentinfo [ref=f18e57]:
    - generic [ref=f18e62]:
      - heading "Subscription" [level=2] [ref=f18e63]
      - generic [ref=f18e64]:
        - textbox "Your email address" [ref=f18e65]
        - button "" [ref=f18e66] [cursor=pointer]
        - paragraph [ref=f18e68]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f18e72]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import {test, expect} from '../fixture/pageObjectFixture';
  2  | 
  3  | 
  4  | test('Login Test', async({page, loginpage, homepage})=>{
  5  |     await loginpage.openApplication();
  6  |     await loginpage.performLogin();
> 7  |     expect(await homepage.checkLoggedInAs()).toBe(true);
     |                                              ^ Error: expect(received).toBe(expected) // Object.is equality
  8  |     await homepage.performLogout();
  9  |     expect(await homepage.isHomePageExists()).toBe(true);
  10 | 
  11 | })
```