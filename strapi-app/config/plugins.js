module.exports = () => ({
  upload: {
    config: {
      providerOptions: {
        sizeLimit: 104857600, // 20MB in bytes
      },
    },
  },
});
