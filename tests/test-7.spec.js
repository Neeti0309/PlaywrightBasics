import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) =>{
console.log("before each")
});


test.afterEach(async ({page}) =>{
console.log("after each")
});

test.beforeAll(async ({}) =>{
console.log("before All")
});


test.afterAll(async ({}) =>{
console.log("after All")
});

test('test1', async ({ page }) => {
  console.log("my testcase 1");
});


test('test2', async ({ page }) => {
  console.log("my testcase 2");
});
