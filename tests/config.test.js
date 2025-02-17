import { setApiKey, getApiKey } from "../src/config.js";

test("API Key should be saved and retrieved", () => {
  setApiKey("test_key");
  expect(getApiKey()).toBe("test_key");
});
