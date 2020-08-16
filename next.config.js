/* eslint-disable @typescript-eslint/no-var-requires */
const dotEnvResult = require('dotenv').config();
if (dotEnvResult.error && process.env.NODE_ENV !== 'production')
  console.warn('Cannot load configuration from .env. The .env file is probably missing.');

const path = require('path');

module.exports = (phase) => {
  const env = {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    API_URL: process.env.API_URL || 'http://localhost:3000',
    CMS_URL: process.env.CMS_URL || '',
    PREVIEW_SECRET: process.env.PREVIEW_SECRET || '',
    GTM_ID: process.env.GTM_ID || '',
  };

  // next.config.js object
  return {
    env,
    webpack: (config) => {
      config.resolve.alias['@@'] = path.resolve(__dirname);
      config.resolve.alias['@components'] = path.resolve(path.join(__dirname, 'src/components'));
      config.resolve.alias['@styles'] = path.resolve(path.join(__dirname, 'src/styles'));
      config.resolve.alias['@utils'] = path.resolve(path.join(__dirname, 'src/utils'));
      return config;
    },
  };
};
