// npx jest e2e/test.e2e.js -c jest.e2e.config.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { chromium, Browser, Page } from 'playwright';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
globalThis.setImmediate = globalThis.setTimeout;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
globalThis['jest-playwright'] = {};
let browser: Browser = null!;
let page: Page = null!;
const exampleURL = 'http://localhost:5173/';

beforeAll(async () => {
  browser = await chromium.launch({ headless: true });
});

afterAll(async () => {
  await browser.close();
});

async function clickAndScreenshot(selector: string) {
  await page.click(selector);
  expect(await page.screenshot()).toMatchImageSnapshot();
}

describe('example1', () => {
  beforeAll(async () => {
    page = await browser.newPage({
      viewport: { width: 1200, height: 1600 },
    });
    await page.goto(`${exampleURL}example1.html?e2e`);
  });

  it('screenshot', async () => {
    expect(await page.screenshot()).toMatchImageSnapshot();

    await clickAndScreenshot('#Primary');
    await clickAndScreenshot('#area');
    await clickAndScreenshot('#bar');
    await clickAndScreenshot('#bubble');
    await clickAndScreenshot('#scatter');
    await clickAndScreenshot('#pie');
    await clickAndScreenshot('#doughnut');
    await clickAndScreenshot('#polarArea');
    await clickAndScreenshot('#radar');
  });
});

describe('example2', () => {
  beforeAll(async () => {
    page = await browser.newPage({
      viewport: { width: 1200, height: 1600 },
    });
    await page.goto(`${exampleURL}example2.html?e2e`);
  });

  it('screenshot', async () => {
    expect(await page.screenshot()).toMatchImageSnapshot();

    await clickAndScreenshot('#Rainbow');
    await clickAndScreenshot('#ToggleScale');
    await clickAndScreenshot('#ToggleScale');
    await clickAndScreenshot('#DefaultColor');
    await clickAndScreenshot('#ReverceColor');
    await clickAndScreenshot('#HalfColor');
    await clickAndScreenshot('#matrix');
    await clickAndScreenshot('#Sinebow');
    await clickAndScreenshot('#ToggleScale');
    await clickAndScreenshot('#ToggleScale');
    await clickAndScreenshot('#DefaultColor');
    await clickAndScreenshot('#ReverceColor');
    await clickAndScreenshot('#HalfColor');
  });
});
