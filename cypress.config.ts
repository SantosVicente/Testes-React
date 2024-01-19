import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'hgxnrs',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
  },
});
