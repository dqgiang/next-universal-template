const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  presets: [path.resolve(__dirname, './preset-next.js')],
  typescript: {
    // Default doc gen option 'react-docgen-typscript' is buggy
    // It brakes Controls and Docs addons due to not be able to generate docs properly
    // See: https://github.com/storybookjs/storybook/blob/next/addons/docs/react/README.md#typescript-props-with-react-docgen
    reactDocgen: 'react-docgen',
  },
};
