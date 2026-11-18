# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: careers.spec.ts >> Jobs Search
- Location: tests\careers.spec.ts:4:1

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Search Jobs' }) resolved to 2 elements:
    1) <button type="button" id="searchButtonCoveoCareerHero" class="ocean-filled search-button">Search jobs</button> aka locator('#searchButtonCoveoCareerHero')
    2) <button type="button" id="searchButtonCoveoofframp" class="ocean-filled search-button">Search jobs</button> aka locator('#searchButtonCoveoofframp')

Call log:
  - waiting for getByRole('button', { name: 'Search Jobs' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - text: 
  - main [ref=e2]:
    - article [ref=e3]:
      - generic [ref=e5]:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - text:  
                    - generic: 
                  - text:  
        - generic [ref=e12]:
          - navigation [ref=e13]:
            - generic [ref=e14]:
              - generic [ref=e15]:
                - link [ref=e16]:
                  - /url: /
                  - img "Infi Logo" [ref=e17] [cursor=pointer]
                - text:                 
              - generic [ref=e18]:
                - navigation [ref=e19]:
                  - list [ref=e20]:
                    - listitem [ref=e21] [cursor=pointer]:
                      - link "Products" [ref=e22]:
                        - /url: "#"
                      - text: 
                    - listitem [ref=e23] [cursor=pointer]:
                      - link "Applications" [ref=e24]:
                        - /url: "#"
                      - text: 
                    - listitem [ref=e25] [cursor=pointer]:
                      - link "Design Resources" [ref=e26]:
                        - /url: "#"
                      - text: 
                    - listitem [ref=e27] [cursor=pointer]:
                      - link "Support & Training" [ref=e28]:
                        - /url: "#"
                      - text: 
                    - listitem [ref=e29] [cursor=pointer]:
                      - link "About" [ref=e30]:
                        - /url: "#"
                      - text: 
                - generic [ref=e32]:
                  - generic [ref=e33]:
                    - generic:
                      - generic:
                        - status [ref=e34]: There are no search suggestions.
                        - status
                      - combobox "Enter a query with minimum of 2 character(s) to enable search." [ref=e38]
                  - text: 
                - navigation [ref=e39]:
                  - list [ref=e40]:
                    - text: 
                    - listitem [ref=e41]:
                      - button "navBarDropdown" [ref=e42] [cursor=pointer]:  
                    - listitem [ref=e43]:
                      - generic [ref=e45]:
                        - button "Currency" [ref=e46] [cursor=pointer]:
                          - generic [aria-hidden] [ref=e47]: 
                        - text:  
                    - listitem [ref=e48]:
                      - button "" [ref=e51] [cursor=pointer]
                    - text: 
                    - listitem [ref=e54]:
                      - generic [ref=e55]:
                        - button "loginButton" [ref=e56] [cursor=pointer]:
                          - generic [ref=e57]: Log in to myInfineon
                          - generic [aria-hidden] [ref=e59]: 
                        - text:            
                - text:      
          - generic:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
          - generic:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
          - generic:                                                                                                                                                                                                                                                                                                                                                                                                                                                      
          - generic:                                
          - generic:                                                                                                                                         
        - generic [ref=e63]:
          - navigation [ref=e67]:
            - list [ref=e68]:
              - listitem [ref=e69]:
                - link "Careers" [ref=e70]:
                  - /url: /careers
              - listitem [ref=e71]:
                - link "Job Search" [ref=e72]:
                  - /url: https://jobs.infineon.com/careers
              - listitem [ref=e73]:
                - link "Teams" [ref=e74]:
                  - /url: /careers/teams
              - listitem [ref=e75]:
                - link "Locations" [ref=e76]:
                  - /url: /careers/our-locations
              - listitem [ref=e77]:
                - link "Diversity & Inclusion" [ref=e78]:
                  - /url: /careers/diversity-inclusion
              - listitem [ref=e79]:
                - link "Students & Graduates" [ref=e80]:
                  - /url: /careers/students-graduates
              - listitem [ref=e81]:
                - link "How to apply" [ref=e82]:
                  - /url: /careers/how-to-apply
              - listitem [ref=e83]:
                - link "Events" [ref=e84]:
                  - /url: /about/events?eventfilters=%5B%7B%22eventFilterType%22%3A%22EventCategoryDropdown%22%2C%22filterType%22%3A%5B%22High%20school%20students%22%2C%22Professionals%22%2C%22University%20students%20%22%5D%2C%22typeOfEvent%22%3A%22Upcoming%22%7D%5D
              - listitem [ref=e85]:
                - link "Contacts" [ref=e86]:
                  - /url: /careers/hr-contacts
          - generic [ref=e100]:
            - generic [ref=e102]:
              - heading "Start your career at Infineon" [level=1] [ref=e103]
              - paragraph [ref=e104]: "#WeAreIn for driving decarbonization and digitalization. Are you in?"
              - generic [ref=e105]:
                - generic [ref=e109]:
                  - combobox "Enter a query with minimum of 2 character(s) to enable search." [ref=e114]
                  - generic [ref=e115]: in
                  - combobox "Enter a query with minimum of 2 character(s) to enable search." [ref=e120]
                - button "Search jobs" [ref=e121] [cursor=pointer]
              - link "Explore all jobs " [ref=e123] [cursor=pointer]:
                - /url: https://jobs.infineon.com/careers
                - text: Explore all jobs
                - generic [ref=e124]: 
            - img "banner image" [ref=e127]
        - generic [ref=e131]:
          - generic [ref=e135]:
            - heading "Join a world leader in semiconductor solutions" [level=2] [ref=e140]
            - generic [ref=e144]:
              - paragraph [ref=e145]: Our semiconductor solutions are at the forefront of the digital revolution, shaping a more connected and environmentally sustainable world. Together, with more than 57,000 people from over 100 countries, we are not just shaping the future, we are redefining it.
              - paragraph [ref=e146]: We engineer innovative products, while caring for our people and empowering them to reach ambitious goals. We offer work-life balance, long term growth and a supportive environment where individuality is celebrated.
          - generic [ref=e150]:
            - paragraph [ref=e159]: "Our employees are the cornerstone of our success. It is through their combined efforts that we can share the stories of the innovative minds behind our achievements. #WeAreIn. Are you in?"
            - region "Video viewer" [ref=e170]:
              - generic [ref=e171]:
                - generic [ref=e172]:
                  - region "Video Player" [ref=e173]:
                    - application [ref=e174]
                  - button "Play or Pause Video" [ref=e176] [cursor=pointer]
                - group [ref=e177]:
                  - generic [ref=e178]:
                    - button "Play" [ref=e179] [cursor=pointer]
                    - slider "Seek Video" [ref=e182]
                    - generic [ref=e183]: 0:00 / 1:25
                    - generic [ref=e185]:
                      - button "Mute" [ref=e186] [cursor=pointer]
                      - generic:
                        - slider "Video Volume"
                    - button "Full Screen" [ref=e187] [cursor=pointer]
            - generic [ref=e195]:
              - heading "Shape your career in Powering AI" [level=2] [ref=e200]
              - paragraph [ref=e205]: At Infineon, we power AI from the grid to the core – enabling an efficient, reliable, and sustainable energy flow today and in the future. With our comprehensive semiconductor portfolio combining Si, SiC, and GaN technologies, we redefine the entire power flow within and beyond AI data centers. Join us in driving the future of Powering AI – and help shape the technologies that make tomorrow’s intelligence possible.
              - link [ref=e211]:
                - /url: /careers/teams/powering-ai
                - generic [ref=e212] [cursor=pointer]:
                  - text: Learn more
                  - generic [aria-hidden] [ref=e214]: 
                - text: 
          - generic [ref=e233]:
            - heading "Opportunities for professionals" [level=2] [ref=e238]
            - paragraph [ref=e243]: You are an experienced professional and looking for a new job opportunity? Join a high-tech company and drive the future of technology with us. Discover jobs in our various functions.
            - button "Find your team" [ref=e248] [cursor=pointer]
          - generic [ref=e252]:
            - generic [ref=e256]:
              - heading "Opportunities for early career talents" [level=2] [ref=e261]
              - paragraph [ref=e266]: There are several ways to become part of our international team. Join us as a trainee, (PhD) student, university graduate, apprentice or dual student. Or simply apply for a position directly. You bring your fresh ideas, your enthusiasm, and your skills. We’ll make sure you learn what you need on the job and have ample opportunity to develop your expertise.
              - button "Learn more" [ref=e271] [cursor=pointer]
            - img "EVP Dresden students" [ref=e282]
          - generic [ref=e295]:
            - paragraph [ref=e297]: What we stand for as an employer
            - generic [ref=e299]:
              - tablist [ref=e301]:
                - button "01 Jobs that matter" [ref=e304] [cursor=pointer]:
                  - generic [ref=e305]: "01"
                  - heading "Jobs that matter" [level=2] [ref=e306]
                - button "02 Work alongside tech experts" [ref=e309] [cursor=pointer]:
                  - generic [ref=e310]: "02"
                  - heading "Work alongside tech experts" [level=2] [ref=e311]
                - button "03 Experience growth and well-being" [ref=e314] [cursor=pointer]:
                  - generic [ref=e315]: "03"
                  - heading "Experience growth and well-being" [level=2] [ref=e316]
                - button "04 Where you belong" [ref=e319] [cursor=pointer]:
                  - generic [ref=e320]: "04"
                  - heading "Where you belong" [level=2] [ref=e321]
              - tabpanel [ref=e323]:
                - generic [ref=e329]:
                  - generic [ref=e333]:
                    - heading "Jobs that matter" [level=3] [ref=e338]
                    - paragraph [ref=e343]: Our tiny chips play a substantial role in powering everything, from the smartphones we use, to the cars we drive, the renewable energy sources we rely on, and the secure transactions we make. At Infineon, you have the opportunity to contribute to a brighter future. Join us in making people’s lives easier, safer, and greener and build a better tomorrow.
                  - img "Sustainability" [ref=e354]
            - text:    
          - complementary [ref=e360]:
            - generic [ref=e364]:
              - img "featured location image here" [ref=e367]
              - generic [ref=e369]:
                - heading "Jobs all over the world" [level=3] [ref=e370]
                - paragraph [ref=e371]: Discover our positions around the globe.
                - generic [ref=e372]:
                  - link "Dresden" [ref=e374] [cursor=pointer]:
                    - /url: /careers/our-locations/dresden
                  - link "Italy" [ref=e376] [cursor=pointer]:
                    - /url: /careers/our-locations/italy
                  - link "Dublin" [ref=e378] [cursor=pointer]:
                    - /url: /careers/our-locations/dublin
                  - link "Portugal" [ref=e380] [cursor=pointer]:
                    - /url: /careers/our-locations/portugal
                  - link "Romania" [ref=e382] [cursor=pointer]:
                    - /url: /careers/our-locations/romania
                  - link "Cegléd" [ref=e384] [cursor=pointer]:
                    - /url: /careers/our-locations/cegled
                  - link "Bangalore" [ref=e386] [cursor=pointer]:
                    - /url: /careers/our-locations/bangalore
                  - link "Penang" [ref=e388] [cursor=pointer]:
                    - /url: /careers/our-locations/penang
                  - link "Thailand" [ref=e390] [cursor=pointer]:
                    - /url: /careers/our-locations/thailand
                  - link "Guadalajara" [ref=e392] [cursor=pointer]:
                    - /url: /careers/our-locations/guadalajara
                - link [ref=e394]:
                  - /url: /careers/our-locations
                  - button "Discover all locations" [ref=e395] [cursor=pointer]
          - complementary [ref=e405]:
            - generic [ref=e408]:
              - generic [ref=e409]:
                - heading "Get more insights" [level=2] [ref=e410]
                - paragraph
                - text: 
              - generic [ref=e411]:
                - generic [ref=e414]:
                  - img "Shape your career in Powering AI" [ref=e416]
                  - generic [ref=e417]:
                    - paragraph [ref=e418]: Shape your career in Powering AI
                    - paragraph [ref=e419]: Join us in driving the future of Powering AI – and help shape the technologies that make tomorrow’s intelligence possible.
                    - link "Learn more " [ref=e421] [cursor=pointer]:
                      - /url: /careers/teams/powering-ai
                      - text: Learn more
                      - generic [ref=e422]: 
                - generic [ref=e425]:
                  - img "Upcoming HR Events" [ref=e427]
                  - generic [ref=e428]:
                    - paragraph [ref=e429]: Upcoming HR Events
                    - paragraph [ref=e430]: Explore our upcoming HR events, tailored to high school students, university students, and professionals.
                    - link "Learn more " [ref=e432] [cursor=pointer]:
                      - /url: /about/events?eventfilters=%5B%7B%22eventFilterType%22%3A%22EventCategoryDropdown%22%2C%22filterType%22%3A%5B%22High%20school%20students%22%2C%22Professionals%22%2C%22University%20students%20%22%5D%2C%22typeOfEvent%22%3A%22Upcoming%22%7D%5D
                      - text: Learn more
                      - generic [ref=e433]: 
                - generic [ref=e436]:
                  - img "Global career development & benefits" [ref=e438]
                  - generic [ref=e439]:
                    - paragraph [ref=e440]: Global career development & benefits
                    - paragraph [ref=e441]: Discover the learning opportunities, flexibility, and benefits that empower our employees to shape their careers.
                    - link "Learn more " [ref=e443] [cursor=pointer]:
                      - /url: /careers/global-career-development-and-benefits
                      - text: Learn more
                      - generic [ref=e444]: 
                - generic [ref=e447]:
                  - img "HR Report" [ref=e449]
                  - generic [ref=e450]:
                    - paragraph [ref=e451]: HR Report
                    - paragraph [ref=e452]: Dive into Infineon's workplace and read our latest Human Resources Report.
                    - link "Learn more " [ref=e454] [cursor=pointer]:
                      - /url: /careers/hr-report
                      - text: Learn more
                      - generic [ref=e455]: 
                - generic [ref=e458]:
                  - img "25 Years Infineon" [ref=e460]
                  - generic [ref=e461]:
                    - paragraph [ref=e462]: 25 Years Infineon
                    - paragraph [ref=e463]: Find out how Infineon's culture has been supporting its employees' personal and professional development for 25 years.
                    - link "Learn more " [ref=e465] [cursor=pointer]:
                      - /url: /our-stories/experiencing-purpose-belonging
                      - text: Learn more
                      - generic [ref=e466]: 
              - generic [ref=e467]:
                - generic: 
                - generic [ref=e468] [cursor=pointer]: 
        - generic [ref=e482]:
          - heading "Find your next career" [level=1] [ref=e483]
          - paragraph [ref=e484]: Would you like to become part of Infineon? Apply now!
          - generic [ref=e485]:
            - generic [ref=e489]:
              - combobox "Enter a query with minimum of 2 character(s) to enable search." [ref=e494]
              - generic [ref=e495]: in
              - combobox "Enter a query with minimum of 2 character(s) to enable search." [ref=e500]
            - button "Search jobs" [ref=e501] [cursor=pointer]
        - generic [ref=e509]:
          - navigation [ref=e511]:
            - generic [ref=e512]:
              - img "Infineon Logo"
            - list [ref=e513]:
              - listitem [ref=e514]:
                - paragraph [ref=e516]: About Us
              - listitem [ref=e517]:
                - link "Company" [ref=e518] [cursor=pointer]:
                  - /url: /about/company
              - listitem [ref=e519]:
                - link "Contact us" [ref=e520] [cursor=pointer]:
                  - /url: /contact-us
              - listitem [ref=e521]:
                - link "Events" [ref=e522] [cursor=pointer]:
                  - /url: /about/events
              - listitem [ref=e523]:
                - link "Press" [ref=e524] [cursor=pointer]:
                  - /url: /about/press
              - listitem [ref=e525]:
                - link "Investor" [ref=e526] [cursor=pointer]:
                  - /url: /about/investor
            - list [ref=e527]:
              - listitem [ref=e528]:
                - paragraph [ref=e530]: Quicklinks
              - listitem [ref=e531]:
                - link "Community" [ref=e532] [cursor=pointer]:
                  - /url: https://community.infineon.com/
              - listitem [ref=e533]:
                - link "Support" [ref=e534] [cursor=pointer]:
                  - /url: /support
              - listitem [ref=e535]:
                - link "Where to buy" [ref=e536] [cursor=pointer]:
                  - /url: /contact-us/where-to-buy
              - listitem [ref=e537]:
                - link "Online sampling" [ref=e538] [cursor=pointer]:
                  - /url: /contact-us/where-to-buy/online-sampling
              - listitem [ref=e539]:
                - link "Quality" [ref=e540] [cursor=pointer]:
                  - /url: /quality
              - listitem [ref=e541]:
                - link "Website feedback" [ref=e542] [cursor=pointer]:
                  - /url: https://yourvoice.infineon.com/jfe/form/SV_3z5Tn0ozMwTqRUy
            - list [ref=e543]:
              - listitem [ref=e544]:
                - paragraph [ref=e546]: MyInfineon
              - listitem [ref=e547]:
                - link "Benefits" [ref=e548] [cursor=pointer]:
                  - /url: /myinfineon-benefits
              - listitem [ref=e549]:
                - link "Profile center" [ref=e550] [cursor=pointer]:
                  - /url: /login/dashboard/profile
              - listitem [ref=e551]:
                - link "Register" [ref=e552] [cursor=pointer]:
                  - /url: /content/ifx/en/login.login.en.json?originURL=/content/ifx/en/login/dashboard.html&action=rg_rg
            - list [ref=e553]:
              - listitem [ref=e554]:
                - paragraph [ref=e556]: Careers
              - listitem [ref=e557]:
                - link "Overview" [ref=e558] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e559]:
                - link "Job Search" [ref=e560] [cursor=pointer]:
                  - /url: https://jobs.infineon.com/careers
              - listitem [ref=e561]:
                - link "Teams" [ref=e562] [cursor=pointer]:
                  - /url: /careers/teams
              - listitem [ref=e563]:
                - link "How to apply" [ref=e564] [cursor=pointer]:
                  - /url: /careers/how-to-apply
          - generic [ref=e565]:
            - navigation [ref=e567]:
              - generic [ref=e568]:
                - list [ref=e569]:
                  - listitem [ref=e570]:
                    - link "Terms of use" [ref=e571] [cursor=pointer]:
                      - /url: /legal/usage-terms
                  - listitem [ref=e573]:
                    - link "Imprint" [ref=e574] [cursor=pointer]:
                      - /url: /legal/imprint
                  - listitem [ref=e576]:
                    - link "Privacy Policy" [ref=e577] [cursor=pointer]:
                      - /url: /legal/privacy-policy
                  - listitem [ref=e579]:
                    - generic [ref=e580] [cursor=pointer]: Cookies
                - generic [ref=e582]: © 1999-2026 Infineon Technologies AG
              - list
            - list [ref=e585]:
              - listitem [ref=e586]:
                - link [aria-hidden] [ref=e587] [cursor=pointer]:
                  - /url: https://www.youtube.com/channel/UCoTflChMPX0VBFXvXYmcu9w
                  - text: 
              - listitem [ref=e588]:
                - link [aria-hidden] [ref=e589] [cursor=pointer]:
                  - /url: https://www.linkedin.com/company/infineon-technologies/
                  - text: 
              - listitem [ref=e590]:
                - link [aria-hidden] [ref=e591] [cursor=pointer]:
                  - /url: https://www.instagram.com/infineon_technologies
                  - text: 
              - listitem [ref=e592]:
                - link [aria-hidden] [ref=e593] [cursor=pointer]:
                  - /url: https://www.tiktok.com/@infineontechnologies
              - listitem [ref=e594]:
                - link "" [ref=e595] [cursor=pointer]:
                  - /url: https://www.facebook.com/Infineon
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
  15 |     this.Jobsfield = page.locator('#CareerHeroRole').getByRole('combobox', { name: 'Enter a query with minimum of' })
  16 |     this.SearchJobsBtn = page.getByRole('button', {name : "Search Jobs"})
  17 |      this.AcceptBtn = page.getByRole('button', {name : "Accept"})
  18 | }
  19 | 
  20 | async searchForJobs(){
  21 | 
  22 |     await this.AcceptBtn.click()
  23 |    await this.Jobsfield.fill("Automation")
> 24 |     await this.SearchJobsBtn.click()
     |                              ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Search Jobs' }) resolved to 2 elements:
  25 | 
  26 | }
  27 | 
  28 | 
  29 | 
  30 | 
  31 | 
  32 | }
  33 | 
  34 | 
```