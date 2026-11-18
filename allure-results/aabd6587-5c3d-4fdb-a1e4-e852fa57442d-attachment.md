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
Error: Test ended.

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
  - Test ended.

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
  8  |   await page.goto(process.env.url!)
  9  | 
> 10 |   expect (page).toHaveTitle("Semiconductor & System Solutions | Infineon Technologies")
     |                 ^ Error: expect(page).toHaveTitle(expected) failed
  11 | });
  12 | 
```