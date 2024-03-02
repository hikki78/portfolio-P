/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true, // Enable 'layers' experiment
    };

    config.module.rules.push({
      test: /\.wasm$/,
      type: "webassembly/async",
    });

    return config;
  },
};

export default nextConfig;
