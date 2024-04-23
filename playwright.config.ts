import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries:0,
  testDir: './tests/',
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    screenshot: 'on'
  },
  projects: [
    {
        name: "chrome:latest:MacOS Catalina@lambdatest",
        use: {
            viewport: { width: 1920, height: 1080 },
        },
    },
    {
        name: "MicrosoftEdge:latest:Windows 10@lambdatest",
        use: {
            viewport: { width: 1280, height: 720 },
        },
    }
  ]
};
export default config;