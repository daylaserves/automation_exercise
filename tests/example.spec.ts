import { test, expect } from '@playwright/test';
import { assert } from 'console';

test('wrong login', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  const linkIngresar = page.locator("//a[@href='/login']")
  // const linkIngresarXpath = page.locator("//a[@c='login']")
  await linkIngresar.click();

  //const emailInput = page.getByRole('textbox', { name: "Email Address"}); hay 3 elementos con este role y nombre toca crear otro locator
  const emailInput = page.locator("//input[@data-qa='login-email']");
  await expect(emailInput).toBeVisible();
  await emailInput.fill('davidacevedo115@gmail.com');

  const passwordInput = page.getByRole('textbox', { name: "Password"});
  await expect(passwordInput).toBeVisible();  
  await passwordInput.fill("12345678");

  const loginButton = page.getByRole('button', { name: 'Login' });
  await loginButton.click();
  const ErrorMessage = page.locator("//form[@action='/login']/p");
  await expect(ErrorMessage).toContainText("Your email or password is incorrect!");
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('button', { name: 'Installation' })).toBeVisible();
});
