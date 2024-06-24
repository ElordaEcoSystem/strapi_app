module.exports = {
  upload: {
    config: {
      providerOptions: {
        sizeLimit: 104857600, // 20MB in bytes
      },
    },
  },
  // settings: {
  //   parser: {
  //     enabled: true,
  //     multipart: true,
  //     formidable: {
  //       maxFileSize: 104857600,
  //     },
  //   },
  // },
  rest: {
    defaultLimit: 100,
    maxLimit: 150,
    withCount: true,
  },
};
