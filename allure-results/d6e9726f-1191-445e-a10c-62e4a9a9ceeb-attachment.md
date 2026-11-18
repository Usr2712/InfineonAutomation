# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: careers.spec.ts >> Jobs Search
- Location: tests\careers.spec.ts:4:1

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByLabel('Search for a role')

```

# Test source

```ts
  1  | import {test, expect , Locator , Page}  from "@playwright/test"
  2  | 
  3  | export class CareersPage{
  4  | 
  5  |     readonly page :Page
  6  |     readonly Jobsfield : Locator
  7  |     readonly SearchJobsBtn : Locator
  8  |     readonly AcceptBtn : Locator
  9  | 
  10 | 
  11 | constructor(page : Page){
  12 | 
  13 | 
  14 |     this.page = page
  15 |     this.Jobsfield = page.getByLabel("Search for a role")
  16 |     this.SearchJobsBtn = page.getByLabel('Enter a query with minimum of 2 character(s) to enable search.')
  17 |     this.AcceptBtn = page.getByRole('button', {name : "Accept"})
  18 | }
  19 | 
  20 | async searchForJobs(){
  21 | 
  22 |     await this.AcceptBtn.click()
> 23 |    await this.Jobsfield.fill("Automation")
     |                         ^ Error: locator.fill: Target page, context or browser has been closed
  24 |     await this.SearchJobsBtn.click()
  25 | 
  26 | }
  27 | 
  28 | 
  29 | 
  30 | 
  31 | 
  32 | }
```