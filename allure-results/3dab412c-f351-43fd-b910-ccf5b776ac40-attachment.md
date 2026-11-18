# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> has title
- Location: tests\Login.spec.ts:5:1

# Error details

```
Error: page.goto: net::ERR_INVALID_AUTH_CREDENTIALS at https://www.newweb-stage.infineon.com/
Call log:
  - navigating to "https://www.newweb-stage.infineon.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | 
  5  | test('has title', async ({ page }) => {
  6  |   //await page.goto("https://www.infineon.com");
  7  | 
> 8  |   await page.goto(process.env.url!)
     |              ^ Error: page.goto: net::ERR_INVALID_AUTH_CREDENTIALS at https://www.newweb-stage.infineon.com/
  9  | 
  10 |   await expect (page).toHaveTitle("Semiconductor & System Solutions | Infineon Technologies")
  11 | });
  12 | 
```