// Configure for Storybook to work with NextJS, Typescript and expecially **CSS Module**
// source: https://gist.github.com/justincy/b8805ae2b333ac98d5a3bd9f431e8f70

const path = require('path');

module.exports = {
  webpackFinal: async (baseConfig, options) => {
    // Modify or replace config. Mutating the original reference object can cause unexpected bugs.
    const { module = {} } = baseConfig;

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    };

    /*
     * CSS Modules
     * Use PostCSS Loader to work with Tailwind CSS
     * Many thanks to https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352
     */

    // First we prevent webpack from using Storybook CSS rules to process CSS modules
    newConfig.module.rules.find(
      (rule) => rule.test.toString() === '/\\.css$/',
    ).exclude = /\.module\.css$/;

    // Then we tell webpack what to do with CSS modules
    newConfig.module.rules.push({
      test: /\.module\.css$/,
      include: path.resolve(__dirname, '../src'),
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: './.storybook/',
            },
          },
        },
      ],
    });

    /*
     * Define alias module resolution
     */
    newConfig.resolve.alias['@@'] = path.resolve(path.join(__dirname, '../src'));
    newConfig.resolve.alias['@components'] = path.resolve(
      path.join(__dirname, '../src/components'),
    );
    newConfig.resolve.alias['@styles'] = path.resolve(path.join(__dirname, '../src/styles'));
    newConfig.resolve.alias['@utils'] = path.resolve(path.join(__dirname, '../src/utils'));

    return newConfig;
  },
};
