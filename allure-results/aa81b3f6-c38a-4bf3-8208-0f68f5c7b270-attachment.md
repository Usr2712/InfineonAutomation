# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> has title
- Location: tests\Login.spec.ts:5:1

# Error details

```
Error: browser.newContext: httpCredentials[0].password: expected string, got undefined
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | 
  5  | test('has title', async ({ browser }) => {
  6  |   
> 7  |   const context = await browser.newContext({
     |                   ^ Error: browser.newContext: httpCredentials[0].password: expected string, got undefined
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
  18 |   await expect (page).toHaveTitle("Semiconductor & System Solutions | Infineon Technologies")
  19 | });
  20 | 
```