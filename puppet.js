"use strict";

const puppeteer = require("puppeteer");

(async () => {
	
	try {
		  const browser = await puppeteer.launch({
			headless: true,
			ignoreHTTPSErrors: true,
			timeout: 1000,
			args:['--no-sandbox']
		  });
		  const page = await browser.newPage();

		  await page.setViewport({
			width: 1920,
			height: 1080
		  });

		  /*
			await page.setRequestInterceptionEnabled(true);
			page.on('request', request => {
				if (request.resourceType === 'Script') {
					request.abort();
				} else {
					request.continue();
				}
			});
			*/

		  await page.goto("https://iriesoft.co.za/public/grid.html");
		  /*
			await page.screenshot({
				path: 'screenshot.png',
				clip: {
					x: 0, 
					y:0, 
					width: 1980, 
					height: 1080
				}
			});
			*/
		  await page.screenshot({ path: "screenshot.png", fullPage: true });

		  browser.close();		
	}
	catch(err) {
		console.log(err);
	}
	


  })();