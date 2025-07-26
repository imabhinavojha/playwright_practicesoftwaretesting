import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    browserName: 'chromium', // or 'firefox', 'webkit'
    headless: false, // Set to true for headless mode
    baseURL: 'https://practicesoftwaretesting.com/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'WebKit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  testDir: './tests',
}); 