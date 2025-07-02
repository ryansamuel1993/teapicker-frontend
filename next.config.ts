import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    if (!config.resolve) {
      config.resolve = {};
    }

    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }

    config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components');

    return config;
  },
};

export default nextConfig;
