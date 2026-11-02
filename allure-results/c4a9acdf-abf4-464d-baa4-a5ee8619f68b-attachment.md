# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC002_LoginTest.spec.ts >> Login Test
- Location: tests\TC002_LoginTest.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-qa="login-email"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic:
        - generic [ref=e47]:
          - heading "AutomationExercise" [level=1] [ref=e48]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e49]
          - paragraph [ref=e50]:
            - text: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
            - link "Automation practice website" [ref=e51] [cursor=pointer]
          - link [ref=e55] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=e56]
          - link [ref=e57] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e58]
        - img "demo website for practice" [ref=e60]
      - generic [ref=e61]:
        - generic [ref=e62]:
          - heading "AutomationExercise" [level=1] [ref=e63]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e64]
          - paragraph [ref=e65]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link [ref=e66] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=e67]
          - link [ref=e68] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e69]
        - img "demo website for practice" [ref=e71]
    - link "" [ref=e72] [cursor=pointer]:
      - /url: "#slider-carousel"
    - link "" [ref=e74] [cursor=pointer]:
      - /url: "#slider-carousel"
  - generic [ref=e78]:
    - generic [ref=e80]:
      - heading "Category" [level=2] [ref=e81]
      - generic [ref=e82]:
        - heading [level=4] [ref=e85]:
          - link " Women" [ref=e86] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e87]: 
            - text: Women
        - heading [level=4] [ref=e91]:
          - link " Men" [ref=e92] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e93]: 
            - text: Men
        - heading [level=4] [ref=e97]:
          - link " Kids" [ref=e98] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e99]: 
            - text: Kids
      - insertion [ref=e102]:
        - generic [ref=e105]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e107]: Discover more
          - link "Automation practice website" [ref=e108] [cursor=pointer]
          - link "Automation skills training" [ref=e113] [cursor=pointer]
          - link "Automation exercise platform" [ref=e118] [cursor=pointer]
          - link "Test automation tools" [ref=e123] [cursor=pointer]
          - link "Automated testing services" [ref=e128] [cursor=pointer]
          - link "Software testing tutorials" [ref=e133] [cursor=pointer]
          - link "API testing practice" [ref=e138] [cursor=pointer]
          - link "Source Robotics" [ref=e143] [cursor=pointer]
      - generic [ref=e148]:
        - heading "Brands" [level=2] [ref=e149]
        - list [ref=e151]:
          - listitem [ref=e152]:
            - link "(6) Polo" [ref=e153] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e154]: (6)
              - text: Polo
          - listitem [ref=e155]:
            - link "(5) H&M" [ref=e156] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e157]: (5)
              - text: H&M
          - listitem [ref=e158]:
            - link "(5) Madame" [ref=e159] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e160]: (5)
              - text: Madame
          - listitem [ref=e161]:
            - link "(3) Mast & Harbour" [ref=e162] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e163]: (3)
              - text: Mast & Harbour
          - listitem [ref=e164]:
            - link "(4) Babyhug" [ref=e165] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e166]: (4)
              - text: Babyhug
          - listitem [ref=e167]:
            - link "(3) Allen Solly Junior" [ref=e168] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e169]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e170]:
            - link "(3) Kookie Kids" [ref=e171] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e172]: (3)
              - text: Kookie Kids
          - listitem [ref=e173]:
            - link "(5) Biba" [ref=e174] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e175]: (5)
              - text: Biba
    - generic [ref=e176]:
      - generic [ref=e177]:
        - heading "Features Items" [level=2] [ref=e178]
        - generic [ref=e180]:
          - generic [ref=e181]:
            - generic [ref=e182]:
              - img "ecommerce website products" [ref=e183]
              - heading "Rs. 500" [level=2] [ref=e184]
              - paragraph [ref=e185]: Blue Top
              - generic [ref=e186] [cursor=pointer]:
                - generic [ref=e187]: 
                - text: Add to cart
            - generic [ref=e188]:
              - heading "Rs. 500" [level=2] [ref=e189]
              - paragraph [ref=e190]: Blue Top
              - generic [ref=e191] [cursor=pointer]:
                - generic [ref=e192]: 
                - text: Add to cart
          - list [ref=e194]:
            - listitem [ref=e195]:
              - link " View Product" [ref=e196] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e197]: 
                - text: View Product
        - generic [ref=e199]:
          - generic [ref=e200]:
            - generic [ref=e201]:
              - img "ecommerce website products" [ref=e202]
              - heading "Rs. 400" [level=2] [ref=e203]
              - paragraph [ref=e204]:
                - text: Men
                - link "Tshirt" [ref=e205] [cursor=pointer]:
                  - /url: "#"
                - link "T-Shirts" [ref=e208] [cursor=pointer]
              - generic [ref=e212] [cursor=pointer]:
                - generic [ref=e213]: 
                - text: Add to cart
            - generic [ref=e214]:
              - heading "Rs. 400" [level=2] [ref=e215]
              - paragraph [ref=e216]: Men Tshirt
              - generic [ref=e217] [cursor=pointer]:
                - generic [ref=e218]: 
                - text: Add to cart
          - list [ref=e220]:
            - listitem [ref=e221]:
              - link " View Product" [ref=e222] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e223]: 
                - text: View Product
        - generic [ref=e225]:
          - generic [ref=e226]:
            - generic [ref=e227]:
              - img "ecommerce website products" [ref=e228]
              - heading "Rs. 1000" [level=2] [ref=e229]
              - paragraph [ref=e230]:
                - text: Sleeveless
                - link "Dress" [ref=e231] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e234] [cursor=pointer]:
                - generic [ref=e235]: 
                - text: Add to cart
            - generic [ref=e236]:
              - heading "Rs. 1000" [level=2] [ref=e237]
              - paragraph [ref=e238]: Sleeveless Dress
              - generic [ref=e239] [cursor=pointer]:
                - generic [ref=e240]: 
                - text: Add to cart
          - list [ref=e242]:
            - listitem [ref=e243]:
              - link " View Product" [ref=e244] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e245]: 
                - text: View Product
        - generic [ref=e247]:
          - generic [ref=e248]:
            - generic [ref=e249]:
              - img "ecommerce website products" [ref=e250]
              - heading "Rs. 1500" [level=2] [ref=e251]
              - paragraph [ref=e252]: Stylish Dress
              - generic [ref=e253] [cursor=pointer]:
                - generic [ref=e254]: 
                - text: Add to cart
            - generic [ref=e255]:
              - heading "Rs. 1500" [level=2] [ref=e256]
              - paragraph [ref=e257]: Stylish Dress
              - generic [ref=e258] [cursor=pointer]:
                - generic [ref=e259]: 
                - text: Add to cart
          - list [ref=e261]:
            - listitem [ref=e262]:
              - link " View Product" [ref=e263] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e264]: 
                - text: View Product
        - generic [ref=e266]:
          - generic [ref=e267]:
            - generic [ref=e268]:
              - img "ecommerce website products" [ref=e269]
              - heading "Rs. 600" [level=2] [ref=e270]
              - paragraph [ref=e271]: Winter Top
              - generic [ref=e272] [cursor=pointer]:
                - generic [ref=e273]: 
                - text: Add to cart
            - generic [ref=e274]:
              - heading "Rs. 600" [level=2] [ref=e275]
              - paragraph [ref=e276]: Winter Top
              - generic [ref=e277] [cursor=pointer]:
                - generic [ref=e278]: 
                - text: Add to cart
          - list [ref=e280]:
            - listitem [ref=e281]:
              - link " View Product" [ref=e282] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e283]: 
                - text: View Product
        - generic [ref=e285]:
          - generic [ref=e286]:
            - generic [ref=e287]:
              - img "ecommerce website products" [ref=e288]
              - heading "Rs. 400" [level=2] [ref=e289]
              - paragraph [ref=e290]: Summer White Top
              - generic [ref=e291] [cursor=pointer]:
                - generic [ref=e292]: 
                - text: Add to cart
            - generic [ref=e293]:
              - heading "Rs. 400" [level=2] [ref=e294]
              - paragraph [ref=e295]: Summer White Top
              - generic [ref=e296] [cursor=pointer]:
                - generic [ref=e297]: 
                - text: Add to cart
          - list [ref=e299]:
            - listitem [ref=e300]:
              - link " View Product" [ref=e301] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e302]: 
                - text: View Product
        - generic [ref=e304]:
          - generic [ref=e305]:
            - generic [ref=e306]:
              - img "ecommerce website products" [ref=e307]
              - heading "Rs. 1000" [level=2] [ref=e308]
              - paragraph [ref=e309]: Madame Top For Women
              - generic [ref=e310] [cursor=pointer]:
                - generic [ref=e311]: 
                - text: Add to cart
            - generic [ref=e312]:
              - heading "Rs. 1000" [level=2] [ref=e313]
              - paragraph [ref=e314]: Madame Top For Women
              - generic [ref=e315] [cursor=pointer]:
                - generic [ref=e316]: 
                - text: Add to cart
          - list [ref=e318]:
            - listitem [ref=e319]:
              - link " View Product" [ref=e320] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e321]: 
                - text: View Product
        - generic [ref=e323]:
          - generic [ref=e324]:
            - generic [ref=e325]:
              - img "ecommerce website products" [ref=e326]
              - heading "Rs. 700" [level=2] [ref=e327]
              - paragraph [ref=e328]: Fancy Green Top
              - generic [ref=e329] [cursor=pointer]:
                - generic [ref=e330]: 
                - text: Add to cart
            - generic [ref=e331]:
              - heading "Rs. 700" [level=2] [ref=e332]
              - paragraph [ref=e333]: Fancy Green Top
              - generic [ref=e334] [cursor=pointer]:
                - generic [ref=e335]: 
                - text: Add to cart
          - list [ref=e337]:
            - listitem [ref=e338]:
              - link " View Product" [ref=e339] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e340]: 
                - text: View Product
        - generic [ref=e342]:
          - generic [ref=e343]:
            - generic [ref=e344]:
              - img "ecommerce website products" [ref=e345]
              - heading "Rs. 499" [level=2] [ref=e346]
              - paragraph [ref=e347]: Sleeves Printed Top - White
              - generic [ref=e348] [cursor=pointer]:
                - generic [ref=e349]: 
                - text: Add to cart
            - generic [ref=e350]:
              - heading "Rs. 499" [level=2] [ref=e351]
              - paragraph [ref=e352]: Sleeves Printed Top - White
              - generic [ref=e353] [cursor=pointer]:
                - generic [ref=e354]: 
                - text: Add to cart
          - list [ref=e356]:
            - listitem [ref=e357]:
              - link " View Product" [ref=e358] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e359]: 
                - text: View Product
        - generic [ref=e361]:
          - generic [ref=e362]:
            - generic [ref=e363]:
              - img "ecommerce website products" [ref=e364]
              - heading "Rs. 359" [level=2] [ref=e365]
              - paragraph [ref=e366]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e367] [cursor=pointer]:
                - generic [ref=e368]: 
                - text: Add to cart
            - generic [ref=e369]:
              - heading "Rs. 359" [level=2] [ref=e370]
              - paragraph [ref=e371]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e372] [cursor=pointer]:
                - generic [ref=e373]: 
                - text: Add to cart
          - list [ref=e375]:
            - listitem [ref=e376]:
              - link " View Product" [ref=e377] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e378]: 
                - text: View Product
        - generic [ref=e380]:
          - generic [ref=e381]:
            - generic [ref=e382]:
              - img "ecommerce website products" [ref=e383]
              - heading "Rs. 278" [level=2] [ref=e384]
              - paragraph [ref=e385]: Frozen Tops For Kids
              - generic [ref=e386] [cursor=pointer]:
                - generic [ref=e387]: 
                - text: Add to cart
            - generic [ref=e388]:
              - heading "Rs. 278" [level=2] [ref=e389]
              - paragraph [ref=e390]: Frozen Tops For Kids
              - generic [ref=e391] [cursor=pointer]:
                - generic [ref=e392]: 
                - text: Add to cart
          - list [ref=e394]:
            - listitem [ref=e395]:
              - link " View Product" [ref=e396] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e397]: 
                - text: View Product
        - generic [ref=e399]:
          - generic [ref=e400]:
            - generic [ref=e401]:
              - img "ecommerce website products" [ref=e402]
              - heading "Rs. 679" [level=2] [ref=e403]
              - paragraph [ref=e404]: Full Sleeves Top Cherry - Pink
              - generic [ref=e405] [cursor=pointer]:
                - generic [ref=e406]: 
                - text: Add to cart
            - generic [ref=e407]:
              - heading "Rs. 679" [level=2] [ref=e408]
              - paragraph [ref=e409]: Full Sleeves Top Cherry - Pink
              - generic [ref=e410] [cursor=pointer]:
                - generic [ref=e411]: 
                - text: Add to cart
          - list [ref=e413]:
            - listitem [ref=e414]:
              - link " View Product" [ref=e415] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e416]: 
                - text: View Product
        - generic [ref=e418]:
          - generic [ref=e419]:
            - generic [ref=e420]:
              - img "ecommerce website products" [ref=e421]
              - heading "Rs. 315" [level=2] [ref=e422]
              - paragraph [ref=e423]: Printed Off Shoulder Top - White
              - generic [ref=e424] [cursor=pointer]:
                - generic [ref=e425]: 
                - text: Add to cart
            - generic [ref=e426]:
              - heading "Rs. 315" [level=2] [ref=e427]
              - paragraph [ref=e428]: Printed Off Shoulder Top - White
              - generic [ref=e429] [cursor=pointer]:
                - generic [ref=e430]: 
                - text: Add to cart
          - list [ref=e432]:
            - listitem [ref=e433]:
              - link " View Product" [ref=e434] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e435]: 
                - text: View Product
        - generic [ref=e437]:
          - generic [ref=e438]:
            - generic [ref=e439]:
              - img "ecommerce website products" [ref=e440]
              - heading "Rs. 478" [level=2] [ref=e441]
              - paragraph [ref=e442]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e443] [cursor=pointer]:
                - generic [ref=e444]: 
                - text: Add to cart
            - generic [ref=e445]:
              - heading "Rs. 478" [level=2] [ref=e446]
              - paragraph [ref=e447]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e448] [cursor=pointer]:
                - generic [ref=e449]: 
                - text: Add to cart
          - list [ref=e451]:
            - listitem [ref=e452]:
              - link " View Product" [ref=e453] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e454]: 
                - text: View Product
        - generic [ref=e456]:
          - generic [ref=e457]:
            - generic [ref=e458]:
              - img "ecommerce website products" [ref=e459]
              - heading "Rs. 1200" [level=2] [ref=e460]
              - paragraph [ref=e461]: Little Girls Mr. Panda Shirt
              - generic [ref=e462] [cursor=pointer]:
                - generic [ref=e463]: 
                - text: Add to cart
            - generic [ref=e464]:
              - heading "Rs. 1200" [level=2] [ref=e465]
              - paragraph [ref=e466]: Little Girls Mr. Panda Shirt
              - generic [ref=e467] [cursor=pointer]:
                - generic [ref=e468]: 
                - text: Add to cart
          - list [ref=e470]:
            - listitem [ref=e471]:
              - link " View Product" [ref=e472] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e473]: 
                - text: View Product
        - generic [ref=e475]:
          - generic [ref=e476]:
            - generic [ref=e477]:
              - img "ecommerce website products" [ref=e478]
              - heading "Rs. 1050" [level=2] [ref=e479]
              - paragraph [ref=e480]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e481] [cursor=pointer]:
                - generic [ref=e482]: 
                - text: Add to cart
            - generic [ref=e483]:
              - heading "Rs. 1050" [level=2] [ref=e484]
              - paragraph [ref=e485]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e486] [cursor=pointer]:
                - generic [ref=e487]: 
                - text: Add to cart
          - list [ref=e489]:
            - listitem [ref=e490]:
              - link " View Product" [ref=e491] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e492]: 
                - text: View Product
        - generic [ref=e494]:
          - generic [ref=e495]:
            - generic [ref=e496]:
              - img "ecommerce website products" [ref=e497]
              - heading "Rs. 1190" [level=2] [ref=e498]
              - paragraph [ref=e499]: Cotton Mull Embroidered Dress
              - generic [ref=e500] [cursor=pointer]:
                - generic [ref=e501]: 
                - text: Add to cart
            - generic [ref=e502]:
              - heading "Rs. 1190" [level=2] [ref=e503]
              - paragraph [ref=e504]: Cotton Mull Embroidered Dress
              - generic [ref=e505] [cursor=pointer]:
                - generic [ref=e506]: 
                - text: Add to cart
          - list [ref=e508]:
            - listitem [ref=e509]:
              - link " View Product" [ref=e510] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e511]: 
                - text: View Product
        - generic [ref=e513]:
          - generic [ref=e514]:
            - generic [ref=e515]:
              - img "ecommerce website products" [ref=e516]
              - heading "Rs. 1530" [level=2] [ref=e517]
              - paragraph [ref=e518]: Blue Cotton Indie Mickey Dress
              - generic [ref=e519] [cursor=pointer]:
                - generic [ref=e520]: 
                - text: Add to cart
            - generic [ref=e521]:
              - heading "Rs. 1530" [level=2] [ref=e522]
              - paragraph [ref=e523]: Blue Cotton Indie Mickey Dress
              - generic [ref=e524] [cursor=pointer]:
                - generic [ref=e525]: 
                - text: Add to cart
          - list [ref=e527]:
            - listitem [ref=e528]:
              - link " View Product" [ref=e529] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e530]: 
                - text: View Product
        - generic [ref=e532]:
          - generic [ref=e533]:
            - generic [ref=e534]:
              - img "ecommerce website products" [ref=e535]
              - heading "Rs. 1600" [level=2] [ref=e536]
              - paragraph [ref=e537]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e538] [cursor=pointer]:
                - generic [ref=e539]: 
                - text: Add to cart
            - generic [ref=e540]:
              - heading "Rs. 1600" [level=2] [ref=e541]
              - paragraph [ref=e542]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e543] [cursor=pointer]:
                - generic [ref=e544]: 
                - text: Add to cart
          - list [ref=e546]:
            - listitem [ref=e547]:
              - link " View Product" [ref=e548] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e549]: 
                - text: View Product
        - generic [ref=e551]:
          - generic [ref=e552]:
            - generic [ref=e553]:
              - img "ecommerce website products" [ref=e554]
              - heading "Rs. 1100" [level=2] [ref=e555]
              - paragraph [ref=e556]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e557] [cursor=pointer]:
                - generic [ref=e558]: 
                - text: Add to cart
            - generic [ref=e559]:
              - heading "Rs. 1100" [level=2] [ref=e560]
              - paragraph [ref=e561]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e562] [cursor=pointer]:
                - generic [ref=e563]: 
                - text: Add to cart
          - list [ref=e565]:
            - listitem [ref=e566]:
              - link " View Product" [ref=e567] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e568]: 
                - text: View Product
        - generic [ref=e570]:
          - generic [ref=e571]:
            - generic [ref=e572]:
              - img "ecommerce website products" [ref=e573]
              - heading "Rs. 849" [level=2] [ref=e574]
              - paragraph [ref=e575]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e576] [cursor=pointer]:
                - generic [ref=e577]: 
                - text: Add to cart
            - generic [ref=e578]:
              - heading "Rs. 849" [level=2] [ref=e579]
              - paragraph [ref=e580]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e581] [cursor=pointer]:
                - generic [ref=e582]: 
                - text: Add to cart
          - list [ref=e584]:
            - listitem [ref=e585]:
              - link " View Product" [ref=e586] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e587]: 
                - text: View Product
        - generic [ref=e589]:
          - generic [ref=e590]:
            - generic [ref=e591]:
              - img "ecommerce website products" [ref=e592]
              - heading "Rs. 1299" [level=2] [ref=e593]
              - paragraph [ref=e594]:
                - text: Pure Cotton V-Neck
                - link "T-Shirt" [ref=e595] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e598] [cursor=pointer]:
                - generic [ref=e599]: 
                - text: Add to cart
            - generic [ref=e600]:
              - heading "Rs. 1299" [level=2] [ref=e601]
              - paragraph [ref=e602]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e603] [cursor=pointer]:
                - generic [ref=e604]: 
                - text: Add to cart
          - list [ref=e606]:
            - listitem [ref=e607]:
              - link " View Product" [ref=e608] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e609]: 
                - text: View Product
        - generic [ref=e611]:
          - generic [ref=e612]:
            - generic [ref=e613]:
              - img "ecommerce website products" [ref=e614]
              - heading "Rs. 1000" [level=2] [ref=e615]
              - paragraph [ref=e616]: Green Side Placket Detail T-Shirt
              - generic [ref=e617] [cursor=pointer]:
                - generic [ref=e618]: 
                - text: Add to cart
            - generic [ref=e619]:
              - heading "Rs. 1000" [level=2] [ref=e620]
              - paragraph [ref=e621]: Green Side Placket Detail T-Shirt
              - generic [ref=e622] [cursor=pointer]:
                - generic [ref=e623]: 
                - text: Add to cart
          - list [ref=e625]:
            - listitem [ref=e626]:
              - link " View Product" [ref=e627] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e628]: 
                - text: View Product
        - generic [ref=e630]:
          - generic [ref=e631]:
            - generic [ref=e632]:
              - img "ecommerce website products" [ref=e633]
              - heading "Rs. 1500" [level=2] [ref=e634]
              - paragraph [ref=e635]: Premium Polo T-Shirts
              - generic [ref=e636] [cursor=pointer]:
                - generic [ref=e637]: 
                - text: Add to cart
            - generic [ref=e638]:
              - heading "Rs. 1500" [level=2] [ref=e639]
              - paragraph [ref=e640]: Premium Polo T-Shirts
              - generic [ref=e641] [cursor=pointer]:
                - generic [ref=e642]: 
                - text: Add to cart
          - list [ref=e644]:
            - listitem [ref=e645]:
              - link " View Product" [ref=e646] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e647]: 
                - text: View Product
        - generic [ref=e649]:
          - generic [ref=e650]:
            - generic [ref=e651]:
              - img "ecommerce website products" [ref=e652]
              - heading "Rs. 850" [level=2] [ref=e653]
              - paragraph [ref=e654]: Pure Cotton Neon Green Tshirt
              - generic [ref=e655] [cursor=pointer]:
                - generic [ref=e656]: 
                - text: Add to cart
            - generic [ref=e657]:
              - heading "Rs. 850" [level=2] [ref=e658]
              - paragraph [ref=e659]: Pure Cotton Neon Green Tshirt
              - generic [ref=e660] [cursor=pointer]:
                - generic [ref=e661]: 
                - text: Add to cart
          - list [ref=e663]:
            - listitem [ref=e664]:
              - link " View Product" [ref=e665] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e666]: 
                - text: View Product
        - generic [ref=e668]:
          - generic [ref=e669]:
            - generic [ref=e670]:
              - img "ecommerce website products" [ref=e671]
              - heading "Rs. 799" [level=2] [ref=e672]
              - paragraph [ref=e673]: Soft Stretch Jeans
              - generic [ref=e674] [cursor=pointer]:
                - generic [ref=e675]: 
                - text: Add to cart
            - generic [ref=e676]:
              - heading "Rs. 799" [level=2] [ref=e677]
              - paragraph [ref=e678]: Soft Stretch Jeans
              - generic [ref=e679] [cursor=pointer]:
                - generic [ref=e680]: 
                - text: Add to cart
          - list [ref=e682]:
            - listitem [ref=e683]:
              - link " View Product" [ref=e684] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e685]: 
                - text: View Product
        - generic [ref=e687]:
          - generic [ref=e688]:
            - generic [ref=e689]:
              - img "ecommerce website products" [ref=e690]
              - heading "Rs. 1200" [level=2] [ref=e691]
              - paragraph [ref=e692]: Regular Fit Straight Jeans
              - generic [ref=e693] [cursor=pointer]:
                - generic [ref=e694]: 
                - text: Add to cart
            - generic [ref=e695]:
              - heading "Rs. 1200" [level=2] [ref=e696]
              - paragraph [ref=e697]: Regular Fit Straight Jeans
              - generic [ref=e698] [cursor=pointer]:
                - generic [ref=e699]: 
                - text: Add to cart
          - list [ref=e701]:
            - listitem [ref=e702]:
              - link " View Product" [ref=e703] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e704]: 
                - text: View Product
        - generic [ref=e706]:
          - generic [ref=e707]:
            - generic [ref=e708]:
              - img "ecommerce website products" [ref=e709]
              - heading "Rs. 1400" [level=2] [ref=e710]
              - paragraph [ref=e711]: Grunt Blue Slim Fit Jeans
              - generic [ref=e712] [cursor=pointer]:
                - generic [ref=e713]: 
                - text: Add to cart
            - generic [ref=e714]:
              - heading "Rs. 1400" [level=2] [ref=e715]
              - paragraph [ref=e716]: Grunt Blue Slim Fit Jeans
              - generic [ref=e717] [cursor=pointer]:
                - generic [ref=e718]: 
                - text: Add to cart
          - list [ref=e720]:
            - listitem [ref=e721]:
              - link " View Product" [ref=e722] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e723]: 
                - text: View Product
        - generic [ref=e725]:
          - generic [ref=e726]:
            - generic [ref=e727]:
              - img "ecommerce website products" [ref=e728]
              - heading "Rs. 2300" [level=2] [ref=e729]
              - paragraph [ref=e730]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e731] [cursor=pointer]:
                - generic [ref=e732]: 
                - text: Add to cart
            - generic [ref=e733]:
              - heading "Rs. 2300" [level=2] [ref=e734]
              - paragraph [ref=e735]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e736] [cursor=pointer]:
                - generic [ref=e737]: 
                - text: Add to cart
          - list [ref=e739]:
            - listitem [ref=e740]:
              - link " View Product" [ref=e741] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e742]: 
                - text: View Product
        - generic [ref=e744]:
          - generic [ref=e745]:
            - generic [ref=e746]:
              - img "ecommerce website products" [ref=e747]
              - heading "Rs. 3000" [level=2] [ref=e748]
              - paragraph [ref=e749]: Cotton Silk Hand Block Print Saree
              - generic [ref=e750] [cursor=pointer]:
                - generic [ref=e751]: 
                - text: Add to cart
            - generic [ref=e752]:
              - heading "Rs. 3000" [level=2] [ref=e753]
              - paragraph [ref=e754]: Cotton Silk Hand Block Print Saree
              - generic [ref=e755] [cursor=pointer]:
                - generic [ref=e756]: 
                - text: Add to cart
          - list [ref=e758]:
            - listitem [ref=e759]:
              - link " View Product" [ref=e760] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e761]: 
                - text: View Product
        - generic [ref=e763]:
          - generic [ref=e764]:
            - generic [ref=e765]:
              - img "ecommerce website products" [ref=e766]
              - heading "Rs. 3500" [level=2] [ref=e767]
              - paragraph [ref=e768]: Rust Red Linen Saree
              - generic [ref=e769] [cursor=pointer]:
                - generic [ref=e770]: 
                - text: Add to cart
            - generic [ref=e771]:
              - heading "Rs. 3500" [level=2] [ref=e772]
              - paragraph [ref=e773]: Rust Red Linen Saree
              - generic [ref=e774] [cursor=pointer]:
                - generic [ref=e775]: 
                - text: Add to cart
          - list [ref=e777]:
            - listitem [ref=e778]:
              - link " View Product" [ref=e779] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e780]: 
                - text: View Product
        - generic [ref=e782]:
          - generic [ref=e783]:
            - generic [ref=e784]:
              - img "ecommerce website products" [ref=e785]
              - heading "Rs. 5000" [level=2] [ref=e786]
              - paragraph [ref=e787]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e788] [cursor=pointer]:
                - generic [ref=e789]: 
                - text: Add to cart
            - generic [ref=e790]:
              - heading "Rs. 5000" [level=2] [ref=e791]
              - paragraph [ref=e792]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e793] [cursor=pointer]:
                - generic [ref=e794]: 
                - text: Add to cart
          - list [ref=e796]:
            - listitem [ref=e797]:
              - link " View Product" [ref=e798] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e799]: 
                - text: View Product
        - generic [ref=e801]:
          - generic [ref=e802]:
            - generic [ref=e803]:
              - img "ecommerce website products" [ref=e804]
              - heading "Rs. 1400" [level=2] [ref=e805]
              - paragraph [ref=e806]: Lace Top For Women
              - generic [ref=e807] [cursor=pointer]:
                - generic [ref=e808]: 
                - text: Add to cart
            - generic [ref=e809]:
              - heading "Rs. 1400" [level=2] [ref=e810]
              - paragraph [ref=e811]: Lace Top For Women
              - generic [ref=e812] [cursor=pointer]:
                - generic [ref=e813]: 
                - text: Add to cart
          - list [ref=e815]:
            - listitem [ref=e816]:
              - link " View Product" [ref=e817] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e818]: 
                - text: View Product
        - generic [ref=e820]:
          - generic [ref=e821]:
            - generic [ref=e822]:
              - img "ecommerce website products" [ref=e823]
              - heading "Rs. 1389" [level=2] [ref=e824]
              - paragraph [ref=e825]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e826] [cursor=pointer]:
                - generic [ref=e827]: 
                - text: Add to cart
            - generic [ref=e828]:
              - heading "Rs. 1389" [level=2] [ref=e829]
              - paragraph [ref=e830]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e831] [cursor=pointer]:
                - generic [ref=e832]: 
                - text: Add to cart
          - list [ref=e834]:
            - listitem [ref=e835]:
              - link " View Product" [ref=e836] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e837]: 
                - text: View Product
      - generic [ref=e838]:
        - heading "recommended items" [level=2] [ref=e839]
        - generic [ref=e840]:
          - generic [ref=e841]:
            - generic:
              - generic [ref=e845]:
                - img "ecommerce website products" [ref=e846]
                - heading "Rs. 500" [level=2] [ref=e847]
                - paragraph [ref=e848]: Blue Top
                - generic [ref=e849] [cursor=pointer]:
                  - generic [ref=e850]: 
                  - text: Add to cart
              - generic [ref=e854]:
                - img "ecommerce website products" [ref=e855]
                - heading "Rs. 400" [level=2] [ref=e856]
                - paragraph [ref=e857]: Men Tshirt
                - generic [ref=e858] [cursor=pointer]:
                  - generic [ref=e859]: 
                  - text: Add to cart
              - generic [ref=e863]:
                - img "ecommerce website products" [ref=e864]
                - heading "Rs. 1000" [level=2] [ref=e865]
                - paragraph [ref=e866]: Rs. 1000
                - generic [ref=e867] [cursor=pointer]:
                  - generic [ref=e868]: 
                  - text: Add to cart
            - generic [ref=e869]:
              - generic [ref=e873]:
                - img "ecommerce website products" [ref=e874]
                - heading "Rs. 1500" [level=2] [ref=e875]
                - paragraph [ref=e876]: Stylish Dress
                - generic [ref=e877] [cursor=pointer]:
                  - generic [ref=e878]: 
                  - text: Add to cart
              - generic [ref=e882]:
                - img "ecommerce website products" [ref=e883]
                - heading "Rs. 600" [level=2] [ref=e884]
                - paragraph [ref=e885]: Winter Top
                - generic [ref=e886] [cursor=pointer]:
                  - generic [ref=e887]: 
                  - text: Add to cart
              - generic [ref=e891]:
                - img "ecommerce website products" [ref=e892]
                - heading "Rs. 400" [level=2] [ref=e893]
                - paragraph [ref=e894]: Summer White Top
                - generic [ref=e895] [cursor=pointer]:
                  - generic [ref=e896]: 
                  - text: Add to cart
          - link "" [ref=e897] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
          - link "" [ref=e899] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
  - insertion [ref=e902]
  - contentinfo [ref=e904]:
    - generic [ref=e909]:
      - heading "Subscription" [level=2] [ref=e910]
      - generic [ref=e911]:
        - textbox "Your email address" [ref=e912]
        - button "" [ref=e913] [cursor=pointer]
        - paragraph [ref=e915]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e919]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1   | import {Page, expect, Locator} from "@playwright/test"
  2   | import { BasePage } from "./BasePage";
  3   | import { TEST_DATA } from "../testData/testData";
  4   | 
  5   | export class LoginPage extends BasePage{
  6   |     
  7   |   
  8   |     //Locators
  9   |     //Login Section
  10  |     private readonly txtLoginEmailAddress:Locator;
  11  |     private readonly txtPassword:Locator;
  12  |     private readonly btnLogin : Locator;
  13  | 
  14  |     //Signup Section
  15  |     private readonly txtName : Locator;
  16  |     private readonly txtSignUpEmail :Locator
  17  |     private readonly btnSignup : Locator;
  18  | 
  19  |     //constructor
  20  |     constructor(page:Page){
  21  |         super(page);
  22  | 
  23  |         //login Section
  24  |         this.txtLoginEmailAddress= page.locator('[data-qa="login-email"]')
  25  |         this.txtPassword = page.getByPlaceholder('Password');
  26  |         this.btnLogin = page.getByRole('button',{name:'Login'})
  27  | 
  28  |         //signup Section
  29  |         this.txtName = page.getByPlaceholder('Name');
  30  |         this.txtSignUpEmail = page.locator('[data-qa="signup-email"]');
  31  |         this.btnSignup = page.getByRole('button', {name:'Signup'})
  32  |     }
  33  |     //action methods
  34  | 
  35  |     //login Section
  36  |     //check logn page is exist
  37  |     async isloginPageExist():Promise<boolean>
  38  |     {
  39  |         let title:string = await this.page.title()
  40  |         if(title)
  41  |         {
  42  |             return true;
  43  |         }
  44  |         return false;
  45  |     }
  46  | 
  47  |     //enter email address to login form
  48  |     async enterEmailAddress(loginEmail:string):Promise<void>
  49  |     {
  50  |         try{
> 51  |            await this.txtLoginEmailAddress.fill(loginEmail);
      |                                            ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  52  |         }
  53  |         catch(error)
  54  |         {
  55  |             console.log(`Exception occured while entering email address : ${error}`);
  56  |             throw error;
  57  |         }
  58  |     }
  59  | 
  60  |     async enterPassword(pass:string):Promise<void>
  61  |     {
  62  |         try{
  63  |             await this.txtPassword.fill(pass);
  64  |         }catch(error){
  65  |             console.log(`Exception occured while entering password : ${error}`);
  66  |             throw error;
  67  |         }
  68  |     }
  69  | 
  70  |     async clickLogin():Promise<void>
  71  |     {
  72  |         try{
  73  |            await this.btnLogin.click();
  74  |         }
  75  |         catch(error)
  76  |         {
  77  |             console.log(`Exception occured while clicking login button : ${error}`);
  78  |             throw error;
  79  |         }
  80  |     }
  81  | 
  82  |     //SignUp section
  83  |     async setName(name:string):Promise<void>
  84  |     {
  85  |         try{
  86  |             await this.txtName.fill(name);
  87  |         }catch(error)
  88  |         {
  89  |             console.log(`Exception occured while sending name : ${error}`);
  90  |             throw error;
  91  |         }
  92  |     }
  93  | 
  94  |     async setEmailAddress(SignUpEmail:string):Promise<void>
  95  |     {
  96  |         try{
  97  |            await this.txtLoginEmailAddress.fill(SignUpEmail);
  98  |         }
  99  |         catch(error)
  100 |         {
  101 |             console.log(`Exception occured while entering SignUp Email address : ${error}`);
  102 |             throw error;
  103 |         }
  104 |     }
  105 | 
  106 |     async clickSignup():Promise<void>
  107 |     {
  108 |         try{
  109 |            await this.btnSignup.click();
  110 |         }
  111 |         catch(error)
  112 |         {
  113 |             console.log(`Exception occured while clicking Signup button : ${error}`);
  114 |             throw error;
  115 |         }
  116 |     }
  117 | 
  118 | 
  119 |     //Perform login
  120 |     async performLogin(){
  121 |         await this.enterEmailAddress(TEST_DATA.user.email);
  122 |         await this.enterPassword(TEST_DATA.user.pass);
  123 |         await this.clickLogin();
  124 |     }
  125 | 
  126 |     //perform Signup
  127 |     async performSignUp(){
  128 |         await this.setName(TEST_DATA.user.name);
  129 |         await this.setEmailAddress(TEST_DATA.user.email);
  130 |         await this.clickSignup();
  131 |     }
  132 | 
  133 |     async openApplication(){
  134 |         await this.page.goto('/');
  135 |     }
  136 | }
```