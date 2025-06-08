import { Page } from '@playwright/test';

export class PLPcompoents{
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto('/ua-scrubs', { waitUntil: 'load' });
    }

    async getProductPrices(productname: string): Promise<number[]> {
        // Wait for the page to load and display products
        const productTiles = this.page.locator('.product-tile')
            .filter({ hasText: productname })
            .locator('.price .value');

        const productcount = await productTiles.count();

        if (productcount === 0) {
            throw new Error(`No products found with the name "${productname}"`);
        }

        const prices: number[] = [];
        for (let i = 0; i < productcount; i++) {
            const price = await productTiles.nth(i).innerText();
            const priceValue = parseFloat(price.replace(/[^0-9.-]+/g, ''));
            console.log(`Price for product ${i + 1}: ${priceValue}`);
            prices.push(priceValue);
        }
        return prices;
    }
    async getProductImages(productname: string): Promise<string[]> {
        // Wait for the page to load and display products
        const productTiles = this.page.locator('.product-tile')
            .filter({ hasText: productname })
            .locator('.image-container .image-pdp-link');

        const productcount = await productTiles.count();

        if (productcount === 0) {
            throw new Error(`No products found with the name "${productname}"`);
        }

        const images: string[] = [];
        for (let i = 0; i < productcount; i++) {
            const imageSrc = await productTiles.nth(i).getAttribute('src');
            console.log(`Image source for product ${i + 1}: ${imageSrc}`);
            images.push(imageSrc || '');
        }
        return images;
    }
}
