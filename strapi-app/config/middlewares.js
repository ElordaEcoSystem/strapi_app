module.exports = ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: env.array("CORS_ORIGINS", [
        "https://elordaecosystem.kz",
        "https://new.elordaecosystem.kz",
        "https://strapi.elordaecosystem.kz",
        "http://localhost:3000",
      ]),
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb",
      jsonLimit: "256mb",
      textLimit: "256mb",
      formidable: {
        maxFileSize: 250 * 1024 * 1024, // максимальный размер загружаемого файла
      },
    },
  },
];
