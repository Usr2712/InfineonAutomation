import { test, expect } from '@playwright/test';



test('sample test', async ({ page }) => {


  await page.goto(process.env.URL!);
  await expect (page).toHaveTitle("Semiconductor & System Solutions | Infineon Technologies")
});
