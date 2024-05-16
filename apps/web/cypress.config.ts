import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // projectRoot: 'tests/',
  experimentalWebKitSupport: true,
  projectId: "y2593e"
});
