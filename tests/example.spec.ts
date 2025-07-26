import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('example test using POM', async ({ page }) => {
  const examplePage = new LoginPage(page);
  await examplePage.goto();
//   console.log(await examplePage.getTitle())
  await expect(examplePage.getTitle()).resolves.toContain('Practice Software Testing');
}); 

test('Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await page.goto('https://practicesoftwaretesting.com/auth/login');

    await loginPage.emailInput.fill('test@test.com');
    await loginPage.passwordInput.fill('Practicesoftware@12');
    await loginPage.loginButton.click();


    await expect(loginPage.successMessage).toBeVisible();
    await expect(loginPage.errorMessage).not.toBeVisible();
    await expect(loginPage.logoutButton).toBeVisible();
    await expect(loginPage.logoutButton).toBeEnabled();
    
  }); 
  
  
  
