module.exports = () => ({
  upload: {
    config: {
      sizeLimit: 250 * 1024 * 1024, // 250 МБ, совпадает с лимитом strapi::body
      providerOptions: {
        localServer: {
          maxage: 104857600, // кэш загруженных файлов в браузере, мс (~29 ч)
        },
      },
    },
  },
});
