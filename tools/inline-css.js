/**
 * This script outputs only the CSS used on pageload. Requires local server to be running.
 * https://stackoverflow.com/questions/45106841/chrome-devtools-coverage-how-to-save-or-capture-code-used-code
 */
const localAddress = 'http://localhost:3000';
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
  
    //Start sending raw DevTools Protocol commands are sent using `client.send()`
    //First off enable the necessary "Domains" for the DevTools commands we care about
    const client = await page.target().createCDPSession()
    await client.send('Page.enable')
    await client.send('DOM.enable')
    await client.send('CSS.enable')
  
    const inlineStylesheetIndex = new Set();
    client.on('CSS.styleSheetAdded', stylesheet => {
      const { header } = stylesheet
      if (header.isInline || header.sourceURL === '' || header.sourceURL.startsWith('blob:')) {
        inlineStylesheetIndex.add(header.styleSheetId);
      }
    });
  
    //Start tracking CSS coverage
    await client.send('CSS.startRuleUsageTracking')
  
    await page.goto(localAddress)
  
    const rules = await client.send('CSS.takeCoverageDelta')
    const usedRules = rules.coverage.filter(rule => {
      return rule.used
    })
  
    const slices = [];
    for (const usedRule of usedRules) {
      if (inlineStylesheetIndex.has(usedRule.styleSheetId)) {
        continue;
      }
  
      const stylesheet = await client.send('CSS.getStyleSheetText', {
        styleSheetId: usedRule.styleSheetId
      });
  
      slices.push(stylesheet.text.slice(usedRule.startOffset, usedRule.endOffset));
    }
  
    console.log(slices.join(''));
  
    await page.close();
    await browser.close();
  })();
