# Playwright Project Structure

## Folder Structure

- `tests/` - Contains all Playwright test files.
- `pages/` - Contains Page Object Model (POM) classes for each page.
- `utils/` - (Optional) Utility/helper functions.
- `.vscode/launch.json` - VSCode debug configuration for Playwright and Node.js.

## Example Usage

1. Create a page object in `pages/`, e.g., `ExamplePage.ts`.
2. Write tests in `tests/` and import your page objects.
3. Run tests with `npx playwright test` or debug using VSCode.