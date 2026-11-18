import { Page ,Locator} from '@playwright/test';



export class Utilities {

static async  takeScreenshot(page: Page, name: string) {
    await page.screenshot({
        path: `screenshots/${name}.png`,
        fullPage: true
    })
}

      static async waitForPageLoad(page: Page) {
        await page.waitForLoadState('networkidle');
    }

    static async scrollToElement(locator: Locator) {
        await locator.scrollIntoViewIfNeeded();
    }

    static async getPageTitle(page: Page) {
        return await page.title();
    }

    static async getCurrentUrl(page: Page) {
        return page.url();
    }

    static async refreshPage(page: Page) {
        await page.reload();
    }

    static async acceptAlert(page: Page) {
        page.on('dialog', async dialog => {
            await dialog.accept();
        });
    }

    static async dismissAlert(page: Page) {
        page.on('dialog', async dialog => {
            await dialog.dismiss();
        });

    }
    static generateRandomEmail() {
    return `test${Date.now()}@gmail.com`;
}

static generateRandomNumber() {
    return Math.floor(Math.random() * 10000);
}
}