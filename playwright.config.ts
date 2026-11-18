import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

const environments = process.env.ENV || "qa2"

dotenv.config({ 
  
  path: `environments/.env.${environments}`, 

});

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [

    ['html', { outputFolder: 'reports/html-report'}],
    ['allure-playwright', {outputFolder:'reports/allure-results'}]
  ],
 
  use: {
   
     headless: false,
    trace: 'on-first-retry',
    screenshot: 'on',
    video: 'retain-on-failure',
  viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    permissions: ['geolocation']
},
 

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      
    
    },

   

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
