import { test,Page, expect } from '@playwright/test';
import { PLPcompoents } from '../components/plp';


test.describe('Prodcut List Page Tests', () => {
    let page: Page;
    let plpcompoents: PLPcompoents;
    const productName = "Butter-Soft STRETCH";
    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        plpcompoents = new PLPcompoents(page);
        await plpcompoents.goto();

        await page.addLocatorHandler(page.getByText('wait..before you go'), async (locator) => {
            await page.getByRole('button', { name: 'No thanks' }).click();
        });

        await page.addLocatorHandler(page.getByText('Uniform Advantage VIP?'), async (locator) => {
            await locator.getByRole('button', { name: 'Accept' }).click();
        });

    
    });

    test('Check that all product prices are available on the PLP', async ({ page }) => {
    const prices = await plpcompoents.getProductPrices(productName);
     
        for (const price of prices) {
            expect(price).toBeGreaterThan(0);}
    });

    test('check that all product images are available on the PLP', async ({ page }) => { 
        const images = await plpcompoents.getProductImages(productName);
        for (const image of images) {
            expect(image).toBeTruthy();
        }

    });

    test('Check that main PLP Components are available', async ({ page }) => { 

        expect(await page.locator('.grid-header  .col-md-auto').isVisible()).toBeTruthy();
        expect(await page.locator('.row.grid-header')).toHaveText('filter by:');
        expect(await page.locator('.items-count').isVisible()).toBeTruthy();
        expect(await page.locator('.items-count').textContent()).toBeGreaterThan(0);
        

    });
        

});

