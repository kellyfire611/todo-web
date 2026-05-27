import { test, expect } from "@playwright/test";

test.describe("Kiểm thử đăng nhập E2E", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("hiển thị thông báo lỗi khi bỏ trống email", async ({ page }) => {
    await page.fill("#password-input", "123456");
    await page.click("#login-button");

    const loginMessage = page.locator("#login-message");

    await expect(loginMessage).toHaveText("Vui lòng nhập email!");
    await expect(loginMessage).toHaveClass(/is-error/);
  });
});