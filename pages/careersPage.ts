import {test, expect , Locator , Page}  from "@playwright/test"

import { Utilities } from '../Utils/CommonMethods';

export class CareersPage{

    readonly page :Page
    readonly Jobsfield : Locator
    readonly SearchJobsBtn : Locator
    readonly AcceptBtn : Locator
    


constructor(page : Page){


    this.page = page
    this.Jobsfield = page.locator('#CareerHeroRole').getByRole('combobox', { name: 'Enter a query with minimum of' })
    this.SearchJobsBtn = page.locator('#searchButtonCoveoCareerHero')
     this.AcceptBtn = page.getByRole('button', {name : "Accept"}).first()
     //this.JobsInSerachResults = page.getByText("Internship - Support in Automation Maintenance (f/m/div)")
}

async searchForJobs(){

    await this.AcceptBtn.click()
   await this.Jobsfield.fill("Automation")

   const pagePromise = this.page.context().waitForEvent('page');

    await this.SearchJobsBtn.click()

     const newPage = await pagePromise;

    await newPage.waitForLoadState();

     const JobsInSerachResults :Locator = newPage.getByRole('heading',{name :"Internship - Support in Automation Maintenance (f/m/div)"})

     Utilities.takeScreenshot(newPage,"careers")

    expect (JobsInSerachResults).toBeVisible()

}

}

