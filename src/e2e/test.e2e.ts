/* eslint-disable import/no-extraneous-dependencies */
import type { Browser, Page } from 'playwright';
import { chromium } from 'playwright';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

export const sleep = (ms: number) => new Promise((resolve) => { setTimeout(resolve, ms); });
const videosPath = (name: string) => (process.env.E2E_VIDEO === 'true' ? `e2e/video/${name}` : undefined);

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
      videosPath: videosPath('example1'),
    });
    await page.goto(`${exampleURL}example1.html?e2e`);
  });

  afterAll(async () => {
    await page.close();
  });

  it('screenshot', async () => {
    await sleep(500);
    expect(await page.screenshot()).toMatchImageSnapshot();

    await clickAndScreenshot('#custom');
    await clickAndScreenshot('#rotate');
    await clickAndScreenshot('#d3');
    await clickAndScreenshot('#Accent');
    await clickAndScreenshot('#office');
    await clickAndScreenshot('#Excel16');
    await clickAndScreenshot('#brewer');
    await clickAndScreenshot('#SetOne9');
    await clickAndScreenshot('#tableau');
    await clickAndScreenshot('#Tableau20');
  });
});

describe('example2', () => {
  beforeAll(async () => {
    page = await browser.newPage({
      viewport: { width: 1200, height: 1600 },
      videosPath: videosPath('example2'),
    });
    await page.goto(`${exampleURL}example2.html?e2e`);
  });

  afterAll(async () => {
    await page.close();
  });

  it('screenshot', async () => {
    await sleep(500);
    expect(await page.screenshot()).toMatchImageSnapshot();

    await clickAndScreenshot('#custom');
    await clickAndScreenshot('#line2');
    await clickAndScreenshot('#area');
    await clickAndScreenshot('#area2');
    await clickAndScreenshot('#bar');
    await clickAndScreenshot('#bar2');
    await clickAndScreenshot('#bubble');
    await clickAndScreenshot('#scatter');
    await clickAndScreenshot('#pie');
    await clickAndScreenshot('#doughnut');
    await clickAndScreenshot('#polarArea');
    await clickAndScreenshot('#radar');
  });
});

describe('example3', () => {
  beforeAll(async () => {
    page = await browser.newPage({
      viewport: { width: 1200, height: 1600 },
      videosPath: videosPath('example3'),
    });
    await page.goto(`${exampleURL}example3.html?e2e`);
  });

  afterAll(async () => {
    await page.close();
  });

  it('screenshot', async () => {
    await sleep(500);
    expect(await page.screenshot()).toMatchImageSnapshot();

    await clickAndScreenshot('#Rainbow');
    await clickAndScreenshot('#ToggleScale');
    await clickAndScreenshot('#ToggleScale');
    await clickAndScreenshot('#DefaultColor');
    await clickAndScreenshot('#ReverseColor');
    await clickAndScreenshot('#HalfColor');
    await clickAndScreenshot('#matrix');
    await clickAndScreenshot('#Sinebow');
    await clickAndScreenshot('#ToggleScale');
    await clickAndScreenshot('#ToggleScale');
    await clickAndScreenshot('#DefaultColor');
    await clickAndScreenshot('#ReverseColor');
    await clickAndScreenshot('#HalfColor');
  });
});
