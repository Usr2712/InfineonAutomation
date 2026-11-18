# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> has title
- Location: tests\Login.spec.ts:5:1

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Semiconductor & System Solutions | Infineon Technologies"
Received: "401 Unauthorized"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × locator resolved to <html>…</html>
       - unexpected value "401 Unauthorized"

```

```yaml
- heading "Unauthorized" [level=1]
- paragraph: This server could not verify that you are authorized to access the document requested. Either you supplied the wrong credentials (e.g., bad password), or your browser doesn't understand how to supply the credentials required.
- paragraph: Additionally, a 401 Unauthorized error was encountered while trying to use an ErrorDocument to handle the request.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | 
  5  | test('has title', async ({ browser }) => {
  6  |   
  7  |   const context = await browser.newContext({
  8  |     httpCredentials: {
  9  |       username: process.env.USERNAME!,
  10 |       password: process.env.PASSWORD!,
  11 |     },
  12 |   });
  13 | 
  14 |   const page = await context.newPage();
  15 | 
  16 |   await page.goto(process.env.url!)
  17 | 
> 18 |   await expect (page).toHaveTitle("Semiconductor & System Solutions | Infineon Technologies")
     |                       ^ Error: expect(page).toHaveTitle(expected) failed
  19 | });
  20 | 
```