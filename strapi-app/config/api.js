module.exports = {
  settings: {
    parser: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 104857600, // Sets the file size limit to 10MB
      },
    },
  },
  rest: {
    defaultLimit: 100,
    maxLimit: 150,
    withCount: true,
  },
};
