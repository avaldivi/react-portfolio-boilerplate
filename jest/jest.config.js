module.exports = {
  rootDir: ".",
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
  transform: {
    '.+\\.(css|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.js$': 'babel-jest'
  },
  setupTestFrameworkScriptFile: "<rootDir>/enzyme.setup.js",
  testMatch: ["<rootDir>/tests/**/*.js"],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}