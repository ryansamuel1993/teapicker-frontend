const withNextIntl = require('next-intl/plugin')('./next-intl.config.ts');

/** @type {import('next').NextConfig} */
const config = {
  // your existing Next.js config
};

module.exports = withNextIntl(config);