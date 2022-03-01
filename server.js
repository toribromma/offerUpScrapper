const express = require("express");
const axios = require("axios");
const puppeteer = require("puppeteer");
const app = express();
const PORT = process.env.PORT || 4000;

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://offerup.com");
  //   await page.click($("div[name=search"));
  //   await page.screenshot({ path: 'example.png' });

  const [response] = await Promise.all([
    await page.waitForSelector("input[name=search"),
    await page.click("input[name=search"),
    await page.keyboard.type("PS5"),
    await page.keyboard.press("Enter")
    
  ]);

//   console.log[response];
//    await page.keyboard.type("input[name=search]", "PS5")

//   await browser.close();
})();
