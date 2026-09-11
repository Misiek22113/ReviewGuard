import assert from "node:assert/strict";
import test from "node:test";
import { POST } from "./route.ts";

test("lead endpoint rejects malformed JSON", async () => {
  const response = await POST(
    new Request("http://localhost/api/lead", {
      method: "POST",
      body: "not-json",
    }),
  );

  assert.equal(response.status, 400);
});

test("lead endpoint validates required fields before sending", async () => {
  const response = await POST(
    new Request("http://localhost/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "invalid",
        restaurant: "Test Restaurant",
        googleUrl: "javascript:alert(1)",
        problem: "We reply once a week.",
      }),
    }),
  );

  assert.equal(response.status, 400);
});

test("lead endpoint silently accepts honeypot submissions", async () => {
  const response = await POST(
    new Request("http://localhost/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ website: "https://spam.example" }),
    }),
  );

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
});
