import fs from 'fs';
// @ts-ignore
import singleFile from 'single-file-cli/single-file-cli-api';
const singleFilePlaywright = singleFile.getBackEnd('playwright-chromium');

const run = async () => {
  await singleFilePlaywright.initialize({});
  const pageData = await singleFilePlaywright.getPageData({
    url: 'https://github.com',
  });
  fs.writeFileSync('CLI Downloaded Page.html', pageData.content);
  await singleFilePlaywright.closeBrowser();
  process.exit(1);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
