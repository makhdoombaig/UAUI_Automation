import { Page } from "@playwright/test";

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://storefront:uachef@dev-sfcc.uniformadvantage.com/login/', { waitUntil: 'load' });
    }

    async login(username: string, password: string) {
        await this.page.locator('#login-form-email').pressSequentially(username);
        await this.page.locator('#login-form-password').pressSequentially(password);
        
        await this.page.locator('.card-body .btn-primary').first().click();
       
    }

    async isLoginSuccessful() {
        return await this.page.isVisible('#myaccount');
    }
}