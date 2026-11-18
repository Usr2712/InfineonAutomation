import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ browser }, use) => {
    const context =
      process.env.ENV === 'qa2'
        ? await browser.newContext({
            httpCredentials: {
              username: process.env.USERNAME!,
              password: process.env.PASSWORD!,
            },
          })
        : await browser.newContext();

    const page = await context.newPage();

    await use(page);

    await context.close();
  },
});

export { expect } from '@playwright/test';