import { test, expect } from '@playwright/test';
import {CareersPage} from "../pages/careersPage";



test('Jobs Search', async ({ page }) => {

    const careersUrl = `${process.env.URL!}/careers`;

    await page.goto(careersUrl);


const careersPageObj = new CareersPage(page);

await careersPageObj.searchForJobs()






});
