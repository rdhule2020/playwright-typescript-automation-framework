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
- generic [active] [ref=f23e1]:
  - banner [ref=f23e2]:
    - generic [ref=f23e5]:
      - link [ref=f23e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f23e9]
      - list [ref=f23e12]:
        - listitem [ref=f23e13]:
          - link " Home" [ref=f23e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f23e15]: 
            - text: Home
        - listitem [ref=f23e16]:
          - link " Products" [ref=f23e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f23e18]: 
            - text: Products
        - listitem [ref=f23e19]:
          - link " Cart" [ref=f23e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f23e21]: 
            - text: Cart
        - listitem [ref=f23e22]:
          - link " Signup / Login" [ref=f23e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f23e24]: 
            - text: Signup / Login
        - listitem [ref=f23e25]:
          - link " Test Cases" [ref=f23e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f23e27]: 
            - text: Test Cases
        - listitem [ref=f23e28]:
          - link " API Testing" [ref=f23e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f23e30]: 
            - text: API Testing
        - listitem [ref=f23e31]:
          - link " Video Tutorials" [ref=f23e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f23e33]: 
            - text: Video Tutorials
        - listitem [ref=f23e34]:
          - link " Contact us" [ref=f23e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f23e36]: 
            - text: Contact us
  - generic [ref=f23e39]:
    - generic [ref=f23e41]:
      - heading "Login to your account" [level=2] [ref=f23e42]
      - generic [ref=f23e43]:
        - textbox "Email Address" [ref=f23e44]: autouser3@gmail.com
        - textbox "Password" [ref=f23e45]: Admin1234
        - paragraph [ref=f23e46]: Your email or password is incorrect!
        - button "Login" [ref=f23e47] [cursor=pointer]
    - heading "OR" [level=2] [ref=f23e49]
    - generic [ref=f23e51]:
      - heading "New User Signup!" [level=2] [ref=f23e52]
      - generic [ref=f23e53]:
        - textbox "Name" [ref=f23e54]
        - textbox "Email Address" [ref=f23e55]
        - button "Signup" [ref=f23e56] [cursor=pointer]
  - contentinfo [ref=f23e57]:
    - generic [ref=f23e62]:
      - heading "Subscription" [level=2] [ref=f23e63]
      - generic [ref=f23e64]:
        - textbox "Your email address" [ref=f23e65]
        - button "" [ref=f23e66] [cursor=pointer]
        - paragraph [ref=f23e68]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f23e72]: Copyright © 2021 All rights reserved
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