// next.config.mjs

const config = {
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

export default config;
