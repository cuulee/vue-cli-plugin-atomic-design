// eslint-disable-next-line no-unused-vars

module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      'serve:storybook': 'vue-cli-service serve:storybook -p 8001 -c private/storybook',
      'build:storybook': 'vue-cli-service build:storybook -c private/storybook',
    },
    devDependencies: {
      '@storybook/vue': '^4.0.0-alpha.16',
      '@storybook/addon-actions': '^4.0.0-alpha.16',
      '@storybook/addon-links': '^4.0.0-alpha.16',
      '@storybook/addon-options': '^4.0.0-alpha.16',
      '@storybook/addon-viewport': '^4.0.0-alpha.16',
      'storybook-addon-vue-info': '0.6.0'
    },
    eslintConfig: {
      env: {
        jest: true
      },
      rules: {
        'import/no-extraneous-dependencies': process.env.JEST_WORKER_ID ? 'off' : 'error'
      }
    },
    jest: {
      testMatch: [
        '**/src/**/*.test.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
      ],
      moduleNameMapper: {
        '^(components|pages)$': '<rootDir>/private/jest/componentsMock.js'
      }
    }
  })

  api.render('./template')
}
