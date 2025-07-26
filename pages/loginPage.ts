import { Locator,Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly successMessage: Locator;
  readonly logoutButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login');
    this.errorMessage = page.locator('.error-message');
    this.successMessage = page.locator('.success-message');
    this.logoutButton = page.locator('#logout');
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com/');
  }

  async getTitle() {
    return this.page.title();
  }
} 