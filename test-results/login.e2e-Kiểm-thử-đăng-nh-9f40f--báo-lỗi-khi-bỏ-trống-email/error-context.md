# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.e2e.spec.js >> Kiểm thử đăng nhập E2E >> hiển thị thông báo lỗi khi bỏ trống email
- Location: tests\e2e\login.e2e.spec.js:8:3

# Error details

```
Error: expect(locator).toHaveClass(expected) failed

Locator: locator('#login-message')
Expected pattern: /is-error/
Received string:  "login-message"
Timeout: 5000ms

Call log:
  - Expect "toHaveClass" with timeout 5000ms
  - waiting for locator('#login-message')
    14 × locator resolved to <div id="login-message" class="login-message">Vui lòng nhập email!</div>
       - unexpected value "login-message"

```

```yaml
- text: Vui lòng nhập email!
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Kiểm thử đăng nhập E2E", () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto("/");
  6  |   });
  7  | 
  8  |   test("hiển thị thông báo lỗi khi bỏ trống email", async ({ page }) => {
  9  |     await page.fill("#password-input", "123456");
  10 |     await page.click("#login-button");
  11 | 
  12 |     const loginMessage = page.locator("#login-message");
  13 | 
  14 |     await expect(loginMessage).toHaveText("Vui lòng nhập email!");
> 15 |     await expect(loginMessage).toHaveClass(/is-error/);
     |                                ^ Error: expect(locator).toHaveClass(expected) failed
  16 |   });
  17 | });
```