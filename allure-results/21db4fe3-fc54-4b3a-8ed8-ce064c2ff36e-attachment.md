# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: careers.spec.ts >> Jobs Search
- Location: tests\careers.spec.ts:4:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Internship - Support in Automation Maintenance (f/m/div)}' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Internship - Support in Automation Maintenance (f/m/div)}' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Internship - Support in Automation Maintenance (f/m/div)}' })
  - Test ended.

```

```yaml
- banner:
  - navigation "site":
    - link "Skip to main content":
      - /url: "#main-content"
    - list:
      - listitem:
        - link "Infineon logo, link to Positions Home":
          - /url: https://www.infineon.com/careers
      - listitem:
        - link "Job Search":
          - /url: /careers
      - listitem:
        - link "My Activity":
          - /url: /careers/dashboard
      - listitem:
        - link "Profile":
          - /url: /careers/profile
    - list:
      - listitem:
        - link "Careers":
          - /url: https://www.infineon.com/careers
      - listitem:
        - link "FAQs":
          - /url: https://www.infineon.com/careers/how-to-apply
      - listitem:
        - link "Benefits":
          - /url: https://www.infineon.com/careers/global-career-development-and-benefits
      - listitem:
        - link "Join Talent Network":
          - /url: /careers/join?domain=infineon.com
      - listitem
      - listitem:
        - link "Sign In":
          - /url: /careers/login
      - listitem:
        - 'button "Change language, current language: English"': English
- main:
  - heading "Jobs" [level=1]
  - text: "Are you in? #WeAreIn for driving decarbonization and digitalization."
  - status
  - combobox "Search for job title or keywords": Automation
  - button "Clear Search for job title or keywords text"
  - status
  - combobox "Search for location"
  - button "Search jobs"
  - button "Job Cart 0 job(s) added" [disabled]: Saved jobs 0
  - button "All filters": All Filters
  - button "Clear all selected filters": Clear All
  - heading "Jobs at Infineon" [level=2]
  - text: Let your resume search for jobs
  - button "Upload your resume to get personalized job recommendations"
  - heading "354 jobs" [level=2]
  - 'button "Sort by: Relevance"': "Sort: Relevance"
  - switch "Turn on job alerts for this search"
  - link "Manage":
    - /url: /careers/settings
  - list "Job search results":
    - listitem:
      - button "Internship - Support in Automation Maintenance (f/m/div) Villach HRC1869919"
      - button "Save Internship - Support in Automation Maintenance (f/m/div)"
    - listitem:
      - button "(Senior) Supervisor Maintenance Automation (f/m/div) Dresden HRC1695196"
      - button "Save (Senior) Supervisor Maintenance Automation (f/m/div)"
    - listitem:
      - button "Technician / Senior Technician - Automation Singapore HRC1796708"
      - button "Save Technician / Senior Technician - Automation"
    - listitem:
      - button "(Senior) Technician Automation (w/m/div) Dresden, Deutschland 563808971995269"
      - button "Save (Senior) Technician Automation (w/m/div)"
    - listitem:
      - 'button "Internship: 3rd Party IP Automation using Agentic AI (f/m/div) Villach HRC1786390"'
      - 'button "Save Internship: 3rd Party IP Automation using Agentic AI (f/m/div)"'
    - listitem:
      - button "Senior Software Engineer Factory Automation (f/m/div) Cegléd HRC1680293"
      - button "Save Senior Software Engineer Factory Automation (f/m/div)"
    - listitem:
      - button "Senior Staff Engineer Material Handling Automation Batam HRC1803541"
      - button "Save Senior Staff Engineer Material Handling Automation"
    - listitem:
      - button "Senior Staff Engineer Automation & Digitalization for IP Development (f/m/div) Munich (Germany) HRC1551743 Hybrid"
      - button "Save Senior Staff Engineer Automation & Digitalization for IP Development (f/m/div)"
    - listitem:
      - button "Senior Engineer Test Development and Automation Kulim HRC1869892"
      - button "Save Senior Engineer Test Development and Automation"
    - listitem:
      - button "Werkstudent - Corporate Accounting Data Automation and Business Intelligence (w/m/div) Regensburg HRC1876124"
      - button "Save Werkstudent - Corporate Accounting Data Automation and Business Intelligence (w/m/div)"
  - text: Page 1 of 36
  - navigation "Jobs pagination":
    - button "Previous jobs" [disabled]
    - text: 1 of 36
    - button "Next jobs"
  - heading "Internship - Support in Automation Maintenance (f/m/div)" [level=2]
  - text: Villach
  - link "Apply Now":
    - /url: /careers/apply?pid=563808972301331
  - button "Save Job"
  - button "Favourite this job"
  - button "Share position, Internship - Support in Automation Maintenance (f/m/div)"
  - text: Use AI to find out how well you match with this job
  - button "Upload resume"
  - tablist:
    - tab "Job description" [selected]
    - tab "Benefits and company information"
  - tabpanel "Job description":
    - term: Job id
    - definition: HRC1869919
    - term: Duration of employment
    - definition: Temporary
    - term: Workplace type
    - definition: onsite
    - term: Join as
    - definition: Student/Intern
    - paragraph: "#WeAreIn to create tiny chips and big careers."
    - paragraph: The future won’t wait... why should you? Join us and make a difference. Whether you join as a student, intern, or trainee, you'll be part of something real - real projects, real impact, and real opportunities to grow.
    - paragraph: Are you in?
    - paragraph: Your role Key responsibilities in your new role
    - paragraph
    - list:
      - listitem:
        - strong: Organization
        - text: ": Assist with organizational tasks for the maintenance department"
      - listitem:
        - strong: "Technical Support:"
        - text: Contribute to mechanical and electrical topics, including related technical matters
      - listitem:
        - strong: "Reporting and Analysis:"
        - text: Prepare information for reports and contribute to analytical tasks
      - listitem:
        - strong: "Contractors and Assets:"
        - text: Assist with contractor supervision and asset tracking
      - listitem:
        - strong: Maintenance Activities
        - text: ": Contribute to technical evaluations, fault analyses, preventive maintenance activities, and continuous improvement and digitization projects"
    - paragraph:
      - heading "Further Information:" [level=3]
    - paragraph:
      - strong: "Type of employment:"
      - text: Temporary / Part-time (flexible working hours from Monday to Friday between 6 a.m. and 7 p.m.)
    - paragraph:
      - strong: "Duration:"
      - text: min. 12 months
    - paragraph: Your profile Qualifications and skills to help you succeed
    - paragraph
    - list:
      - listitem:
        - strong: "Education:"
        - text: Currently pursuing a degree in mechatronics, electrical engineering, mechanical engineering, automation, industrial engineering or a similar field
      - listitem:
        - strong: "Technical Knowledge:"
        - text: Basic understanding of mechanical and electrical systems
      - listitem:
        - strong: "Skills:"
        - text: Strong analytical and organizational skills, with confident use of MS Office
      - listitem:
        - strong: "Working Style:"
        - text: Able to work independently and reliably, with a hands-on mindset and comfort supporting technical activities on the shop floor and organizational tasks such as reporting and contractor coordination
      - listitem:
        - strong: "Language Skills:"
        - text: Fluency in English, very good German skills
    - paragraph: Additional information
    - paragraph: This position is subject to the collective agreement for workers and employees in the electrical and electronics industry (full-time), employment group B for bachelor students, employment group D for master students (https://www.feei.at/wp-content/uploads/2026/06/minimum-salaries-white-collar-workers-2026-05-01.pdf).
    - paragraph: "#WeAreIn for driving decarbonization and digitalization. As a global leader in semiconductor solutions in power systems and IoT, Infineon enables game-changing solutions for green and efficient energy, clean and safe mobility, as well as smart and secure IoT. Together, we drive innovation and customer success, while caring for our people and empowering them to reach ambitious goals. Be a part of making life easier, safer and greener. Are you in? We are on a journey to create the best Infineon for everyone."
    - paragraph: We strive to create the best Infineon for everyone by embracing diversity and inclusion. We welcome applicants for who they are and offer a workplace built on trust, openness, respect and equal opportunity.
    - paragraph: Our hiring decisions are based on skills and experience. Even if you don’t meet every requirement, we encourage you to apply.
    - paragraph: Please let your recruiter know if you need any accommodations during the interview process.
    - paragraph
    - paragraph:
      - text: Learn more about our various
      - link "contact channels":
        - /url: https://www.infineon.com/cms/en/about-infineon/company/contacts/
      - text: and about
      - link "Diversity & Inclusion":
        - /url: https://www.infineon.com/cms/en/careers/diversity-and-inclusion/
      - text: at Infineon.
    - paragraph: Ina Miklau
    - heading "Insights from previous hires" [level=3]
    - heading "Top skills" [level=4]
    - list:
      - listitem: Analysis
      - listitem: Communication
      - listitem: Artificial Intelligence
      - listitem: Engineering
      - listitem: Collaboration
      - listitem: Language
      - listitem: Efficiency
      - listitem: Design
      - listitem: Circuits
      - listitem: API Integration
    - heading "Previously worked as" [level=4]
    - list:
      - listitem: 1. Working Student
      - listitem: 2. Praktikum
      - listitem: 3. Praktikantin
      - listitem: 4. Studentische Hilfskraft
      - listitem: 5. Intern
  - region "Similar Positions":
    - heading "Similar jobs" [level=2]
    - button "Previous similar jobs" [disabled]
    - button "Next similar jobs"
    - navigation
    - list "Similar jobs":
      - listitem:
        - link "Internship - Lab Support Engineer (f/m/div) Villach HRC1818562":
          - /url: /careers/job/563808972097346
        - button "Save Internship - Lab Support Engineer (f/m/div)"
      - listitem:
        - link "(Senior) Supervisor Maintenance Automation (f/m/div) Dresden HRC1695196":
          - /url: /careers/job/563808971829594
        - button "Save (Senior) Supervisor Maintenance Automation (f/m/div)"
      - listitem:
        - link "Internship - AI, Digitalization & Software Development in Product Marketing (f/m/div) Villach HRC1865014":
          - /url: /careers/job/563808972284015
        - button "Save Internship - AI, Digitalization & Software Development in Product Marketing (f/m/div)"
      - listitem:
        - link "Internship - Lab Verification Engineer in the AMS Lab of the Development Center Villach (f/m/div) Villach (Austria) HRC1715777":
          - /url: /careers/job/563808971620732
        - button "Save Internship - Lab Verification Engineer in the AMS Lab of the Development Center Villach (f/m/div)"
      - listitem:
        - link "Internship - Parts Clean and Lab Assistant (f/m/div) Villach HRC1850693":
          - /url: /careers/job/563808972247372
        - button "Save Internship - Parts Clean and Lab Assistant (f/m/div)"
      - listitem:
        - link "Internship - Electroacoustic Measurement Laboratory (f/m/div) Villach HRC1850146":
          - /url: /careers/job/563808972245267
        - button "Save Internship - Electroacoustic Measurement Laboratory (f/m/div)"
      - listitem:
        - 'link "Internship: 3rd Party IP Automation using Agentic AI (f/m/div) Villach HRC1786390"':
          - /url: /careers/job/563808971946727
        - 'button "Save Internship: 3rd Party IP Automation using Agentic AI (f/m/div)"'
      - listitem:
        - link "Industriepraktikum - Lab Logistic Support (w/m/div) Villach HRC1873605":
          - /url: /careers/job/563808972321422
        - button "Save Industriepraktikum - Lab Logistic Support (w/m/div)"
      - listitem:
        - link "Internship - Procurement (f/m/div) Villach HRC1848383":
          - /url: /careers/job/563808972212498
        - button "Save Internship - Procurement (f/m/div)"
      - listitem:
        - link "Working Student - Procurement and Logistic Support (f/m/div) Munich HRC1859893":
          - /url: /careers/job/563808972264421
        - button "Save Working Student - Procurement and Logistic Support (f/m/div)"
    - status: Slide 1 of 10
- contentinfo:
  - contentinfo:
    - link "Infineon on Youtube":
      - /url: https://www.youtube.com/channel/UCoTflChMPX0VBFXvXYmcu9w
      - img
    - link "Infineon on Linkedin":
      - /url: https://www.linkedin.com/company/infineon-technologies/
      - img
    - link "Infineon on Instagram":
      - /url: https://www.instagram.com/infineon_technologies/
      - img
    - link "Infineon on TikTok":
      - /url: https://www.tiktok.com/@infineontechnologies
      - img
    - link "Infineon on Facebook":
      - /url: https://www.facebook.com/Infineon
      - img
    - separator
    - paragraph: © 1999 - 2026 Infineon Technologies AG
    - list:
      - listitem:
        - link "Usage of this website is subject to our Usage Terms":
          - /url: https://www.infineon.com/legal/usage-terms/
      - listitem:
        - link "Imprint":
          - /url: https://www.infineon.com/legal/imprint/
      - listitem:
        - link "Contact":
          - /url: https://www.infineon.com/contact-us
      - listitem:
        - link "Privacy Policy":
          - /url: https://www.infineon.com/legal/privacy-policy
      - listitem:
        - link "Glossary":
          - /url: https://www.infineon.com/glossary
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
  11 | 
  12 | constructor(page : Page){
  13 | 
  14 | 
  15 |     this.page = page
  16 |     this.Jobsfield = page.locator('#CareerHeroRole').getByRole('combobox', { name: 'Enter a query with minimum of' })
  17 |     this.SearchJobsBtn = page.locator('#searchButtonCoveoCareerHero')
  18 |      this.AcceptBtn = page.getByRole('button', {name : "Accept"}).first()
  19 |      //this.JobsInSerachResults = page.getByText("Internship - Support in Automation Maintenance (f/m/div)")
  20 | }
  21 | 
  22 | async searchForJobs(){
  23 | 
  24 |     await this.AcceptBtn.click()
  25 |    await this.Jobsfield.fill("Automation")
  26 | 
  27 |    const pagePromise = this.page.context().waitForEvent('page');
  28 | 
  29 |     await this.SearchJobsBtn.click()
  30 | 
  31 |      const newPage = await pagePromise;
  32 | 
  33 |     await newPage.waitForLoadState();
  34 | 
  35 |      const JobsInSerachResults :Locator = newPage.getByRole('heading',{name :"Internship - Support in Automation Maintenance (f/m/div)}"})
  36 | 
> 37 |     expect (JobsInSerachResults).toBeVisible()
     |                                  ^ Error: expect(locator).toBeVisible() failed
  38 | 
  39 | 
  40 | 
  41 | }
  42 | 
  43 | 
  44 | 
  45 | 
  46 | 
  47 | }
  48 | 
  49 | 
```