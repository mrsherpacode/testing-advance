import { describe, it, expect } from "vitest";
import { generateTokenPromise } from "./example";

it("should generate a token", async () => {
  const testEmail = "test@gmail.com";
  // this also works
  // return;
  // expect(generateTokenPromise(testEmail)).resolves.toBeDefined();
  const token = await generateTokenPromise(testEmail);
  // expect(token).toBe(2); this will fail
  expect(token).toBeDefined();

  expect(typeof token).toBe("string");
  expect(token.length).toBeGreaterThan(0);
});
