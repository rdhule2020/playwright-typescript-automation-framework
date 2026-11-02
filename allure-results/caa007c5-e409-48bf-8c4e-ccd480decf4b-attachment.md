# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC001_SignUp.spec.ts >> SignUp Test
- Location: tests\TC001_SignUp.spec.ts:5:5

# Error details

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [active] [ref=f31e1]:
  - banner [ref=f31e2]:
    - generic [ref=f31e5]:
      - link [ref=f31e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f31e9]
      - list [ref=f31e12]:
        - listitem [ref=f31e13]:
          - link " Home" [ref=f31e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f31e15]: 
            - text: Home
        - listitem [ref=f31e16]:
          - link " Products" [ref=f31e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f31e18]: 
            - text: Products
        - listitem [ref=f31e19]:
          - link " Cart" [ref=f31e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f31e21]: 
            - text: Cart
        - listitem [ref=f31e22]:
          - link " Signup / Login" [ref=f31e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f31e24]: 
            - text: Signup / Login
        - listitem [ref=f31e25]:
          - link " Test Cases" [ref=f31e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f31e27]: 
            - text: Test Cases
        - listitem [ref=f31e28]:
          - link " API Testing" [ref=f31e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f31e30]: 
            - text: API Testing
        - listitem [ref=f31e31]:
          - link " Video Tutorials" [ref=f31e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f31e33]: 
            - text: Video Tutorials
        - listitem [ref=f31e34]:
          - link " Contact us" [ref=f31e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f31e36]: 
            - text: Contact us
  - generic [ref=f31e40]:
    - heading "Account Deleted!" [level=2] [ref=f31e41]
    - paragraph [ref=f31e42]:
      - text: Your account has been permanently deleted!
      - link "Learn a Language" [ref=f31e43] [cursor=pointer]
    - paragraph [ref=f31e47]:
      - text: You can create new account to take advantage of member privileges to enhance your online
      - link "shopping" [ref=f31e48] [cursor=pointer]:
        - /url: "#"
      - text: experience with us.
    - link "Continue" [ref=f31e52] [cursor=pointer]:
      - /url: /
  - contentinfo [ref=f31e53]:
    - generic [ref=f31e58]:
      - heading "Subscription" [level=2] [ref=f31e59]
      - generic [ref=f31e60]:
        - textbox "Your email address" [ref=f31e61]
        - button "" [ref=f31e62] [cursor=pointer]
        - paragraph [ref=f31e64]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f31e68]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=f31e70]:
    - generic [ref=f31e73]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=f31e75]: Discover more
      - link "Software Testing Services" [ref=f31e76] [cursor=pointer]
      - link "API Testing Tools" [ref=f31e81] [cursor=pointer]
      - link "Test Case Management" [ref=f31e86] [cursor=pointer]
```