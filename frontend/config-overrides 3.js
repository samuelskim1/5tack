const webpack = require('webpack');

module.exports = function override(config, env) {
  // Add resolve.fallback configuration
  config.resolve.fallback = {
    ...config.resolve.fallback,
    'crypto': require.resolve('crypto-browserify'),
    'http': require.resolve('stream-http'),
    'path': require.resolve('path-browserify'),
    'querystring': require.resolve('querystring-es3'),
    'stream': require.resolve('stream-browserify'),
    'url': require.resolve('url/'),
    'zlib': require.resolve('browserify-zlib'),
    'assert': require.resolve('assert/'),
    'buffer': require.resolve('buffer/'),
    'fs': false,
    'net': false,
    'util': require.resolve('util/'),
  };

  return config;
};

