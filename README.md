# WebAutomation_Framwork

This project is an automated testing framework built with [Playwright](https://playwright.dev/) for end-to-end testing of the Uniform Advantage storefront.
It provides reusable components and test cases for validating key user flows and UI elements.

## Features

- **Component-based structure:** Encapsulates page logic for login, product listing, cart, checkout, and more.
- **Playwright-powered:** Uses Playwright for fast, reliable browser automation.
- **Test organization:** Tests are grouped by feature for clarity and maintainability.
- **Custom utilities:** Includes navigation helpers and test data utilities.

## Project Structure

```
WebAutomation_Framwork/
├── components/                # Page Object Model (POM) classes for each page/feature
│   ├── plp.ts                 # PLP (Product List Page) component class
│   ├── login.ts               # Login page component class
│   └── ...                    # Other page/component classes
├── tests/                     # Playwright test specifications
│   ├── plpchecks.spec.ts      # PLP-related test cases
│   └── ...                    # Other test files
├── utils/                     # Utility modules (helpers, test data, etc.)
│   └── ...                    
├── playwright.config.ts       # Playwright configuration file
├── package.json               # Project dependencies and scripts
└── README.md      
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run tests:**
   ```sh
   npx playwright install --with-deps
   ```

3. **View reports:**
   After running tests, open the HTML report:
   ```sh
   npx playwright show-report
   ```

## Page Object Model (POM) in This Project

This framework follows the **Page Object Model (POM)** design pattern to promote maintainability, reusability, and readability of test code.

- **Component Classes:**  
  Each file in the `components/` directory represents a page or a significant UI component (e.g., PLP, Login, Cart).  
  These classes encapsulate all selectors and methods for interacting with their respective pages.

- **Example: PLP Component (`components/plp.ts`)**
    - Contains methods like `goto()`, `getProductPrices(productName)`, and `getProductImages(productName)`.
    - Abstracts away direct Playwright calls, so tests remain clean and focused on assertions.

- **Test Files:**  
  Test files in the `tests/` directory import these component classes and use their methods to perform actions and assertions.  
  This separation ensures that if the UI changes, only the component class needs updating, not every test.

- **Utilities:**  
  The `utils/` directory can contain shared helpers, data generators, or navigation utilities to further DRY up your codebase.

  
## Writing Tests

- Add new test specs in the `tests/` directory.
- Use or extend components in `components/` for page interactions.
- Utilities in `utils/` can be used for navigation and test data.



## Configuration

- The base URL and browser settings are defined in [`playwright.config.ts`](playwright.config.ts).
- Test results and reports are output to `/test-results` and `/playwright-report`.


---

*Happy Testing!*
