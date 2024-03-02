// next.config.js

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.experiments = {
        asyncWebAssembly: true,
      };

      config.module.rules.push({
        test: /\.wasm$/,
        type: "webassembly/async",
        issuer: /\.(js|ts)x?$/,
      });
    }

    return config;
  },
};
