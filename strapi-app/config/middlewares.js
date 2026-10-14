module.exports = ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      // Адрес самого Strapi (PUBLIC_URL) разрешён всегда — с него работает админка
      origin: [
        env("PUBLIC_URL", "https://strapi.elordaecosystem.kz"),
        ...env.array("CORS_ORIGINS", [
          "https://elordaecosystem.kz",
          "https://new.elordaecosystem.kz",
          "http://localhost:3000",
        ]),
      ],
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
