export class Navigate {
  private static readonly allPaths = {
        /** Home page path */
        HOME: '/',
        /** Ladies all womens category path */
        LADIES_ALL_WOMENS: '/ladies-uniforms/',
        /** Ladies solid tops category path */
        LADIES_SOLID_TOPS: '/ladies-uniforms/women-all-tops/women-solid-tops/',
        /** Ladies pants category path */
        LADIES_PANTS: '/ladies-uniforms/women-all-bottoms/women-pants/',
        /** Ladies print tops category path */
        LADIES_PRINT_TOPS: '/ladies-uniforms/women-all-tops/women-print-tops/',
        /** Ladies regular pants category path */
        LADIES_REGULAR_PANTS: '/ladies-uniforms/women-all-pants/women-regular-pants/',
        /** Ladies solid jackets category path */
        LADIES_SOLID_JACKETS: '/ladies-uniforms/women-all-jackets/women-solid-jackets/',
        /** Mens solid tops category path */
        MENS_SOLID_TOPS: '/men-uniforms/men-all-tops/men-solid-tops/',
        /** Mens pants category path */
        MENS_PANTS: '/men-uniforms/men-all-bottoms/men-pants/',
        /** Mens print tops category path */
        MENS_PRINT_TOPS: '/men-uniforms/men-all-tops/men-print-tops/',
        /** Alternative ladies solid tops category path */
        LADIES_SOLID_TOPS_2: '/ladies-uniforms/women-all-tops/women-solid-tops/',
        /** Accessory - All Medical Devices category path */
        ACCESORIES_ALL_MEDICAL_DEVICES: '/all-accessories/',
        /** Accessory - Medical Devices category path */
        ACCESORIES_MEDICAL_DEVICES: '/all-accessories/medical-devices/',
        /** Footwear - All Shoes category path */
        FOOTWEAR_ALL: '/all-shoes/',
        /** Brands - Hypothesis category path */
        BRANDS_HYPOTHESYS: '/medical-uniform-brands/the-hypothesis-scrubs/'
    } as const;
    private static readonly to = this.allPaths;
}