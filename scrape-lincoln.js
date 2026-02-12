const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await puppeteer.newPage();
  
  await page.goto('https://www.lincoln.com', { 
    waitUntil: 'networkidle2',
    timeout: 60000 
  });

  const extractedData = await page.evaluate(() => {
    const data = {
      cssVariables: {},
      fonts: [],
      metaTags: [],
      analytics: {
        adobeLaunch: false,
        adobeDTM: false
      }
    };

    // Extract CSS Variables from :root
    const rootStyles = getComputedStyle(document.documentElement);
    for (let i = 0; i < rootStyles.length; i++) {
      const prop = rootStyles[i];
      if (prop.startsWith('--')) {
        data.cssVariables[prop] = rootStyles.getPropertyValue(prop).trim();
      }
    }

    // Extract all stylesheets and look for CSS variables and fonts
    Array.from(document.styleSheets).forEach(sheet => {
      try {
        Array.from(sheet.cssRules || []).forEach(rule => {
          // Check for @font-face rules
          if (rule instanceof CSSFontFaceRule) {
            data.fonts.push({
              fontFamily: rule.style.fontFamily,
              src: rule.style.src,
              fontWeight: rule.style.fontWeight,
              fontStyle: rule.style.fontStyle
            });
          }
          // Check for CSS variables in rules
          if (rule.style) {
            for (let i = 0; i < rule.style.length; i++) {
              const prop = rule.style[i];
              if (prop.startsWith('--')) {
                data.cssVariables[prop] = rule.style.getPropertyValue(prop).trim();
              }
            }
          }
        });
      } catch (e) {
        // CORS or other errors - skip
      }
    });

    // Extract meta tags
    document.querySelectorAll('meta').forEach(meta => {
      const name = meta.getAttribute('name') || meta.getAttribute('property');
      const content = meta.getAttribute('content');
      if (name && content) {
        data.metaTags.push({ name, content });
      }
    });

    // Check for Adobe Analytics
    const scripts = Array.from(document.querySelectorAll('script'));
    data.analytics.adobeLaunch = scripts.some(s => 
      s.src && s.src.includes('assets.adobedtm.com')
    );
    data.analytics.adobeDTM = scripts.some(s => 
      s.textContent && s.textContent.includes('DTM')
    );

    return data;
  });

  // Save HTML
  const html = await page.content();
  fs.writeFileSync('reference.html', html);

  // Save extracted data
  fs.writeFileSync('extracted-data.json', JSON.stringify(extractedData, null, 2));

  console.log('Extraction complete!');
  console.log('CSS Variables found:', Object.keys(extractedData.cssVariables).length);
  console.log('Fonts found:', extractedData.fonts.length);
  console.log('Meta tags found:', extractedData.metaTags.length);
  console.log('Adobe Launch detected:', extractedData.analytics.adobeLaunch);
  console.log('Adobe DTM detected:', extractedData.analytics.adobeDTM);

  await browser.close();
})();
