const express = require("express");
const axios = require("axios");
const puppeteer = require("puppeteer");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Offer Up Scrapper API");
});

app.listen(PORT);

scraperObject = {
  url: "https://offerup.com",
  async scraper(url, query) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://offerup.com");
    const [response] = await Promise.all([
      await page.waitForSelector("input[name=search"),
      await page.click("input[name=search"),
      await page.keyboard.type(query),
      await page.keyboard.press("Enter"),
      await page.waitForSelector("main"),
      
    ]);

    // await page.waitForNavigation();
    // console.log(response)
    await page.waitForSelector("main>div:last-child>div>div:first-child>div");
    // var results = []
    console.log("hi")
    let results = await page.$$("main>div:last-child>div>div:first-child>div>a")
    console.log(results.length);
    // let text = await results[0].$("div:last-child>p")
    // console.log(text)

  //  await browser.close();

  },
}
scraperObject.scraper(this.url, "PS5")
