module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-cr8ivio`
  extends: ["cr8ivio"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
