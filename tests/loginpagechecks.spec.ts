import{test,Page,expect} from '@playwright/test';
import { LoginPage } from '../components/login.ts';

test.describe('Login Page Tests', () => {
    let page: Page;
    let loginPage: LoginPage;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });


    test('should display the login form', async () => {
        expect(await page.locator('#login-form-email').isVisible()).toBeTruthy();
        expect(await page.locator('#login-form-password').isVisible()).toBeTruthy();
        expect(await page.locator('.card-body .btn-primary').first().isVisible()).toBeTruthy();
    });

    test('should log in with valid credentials', async () => {
        await loginPage.login('test001@gmail.com', 'Makhdoom12#');
        await page.waitForSelector('#myaccount'); 
        expect(await loginPage.isLoginSuccessful()).toBeTruthy();
    });

    test('should not log in with invalid credentials', async () => {
        await loginPage.login('test001@gmail.com', 'invalidPassword');
        await page.waitForTimeout(2000); // Wait for the error message to appear
        expect(await page.locator('.alert-danger').isVisible()).toBeTruthy();
    });

    
    

});
