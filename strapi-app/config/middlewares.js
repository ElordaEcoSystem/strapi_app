// module.exports = [
//   "strapi::logger",
//   "strapi::errors",
//   "strapi::security",
//   "strapi::cors",
//   "strapi::poweredBy",
//   "strapi::query",
//   // "strapi::body",
//   "strapi::session",
//   "strapi::favicon",
//   "strapi::public",
//   {
//     name: "strapi::body",
//     config: {
//       formLimit: "256mb", // modify form body
//       jsonLimit: "256mb", // modify JSON body
//       textLimit: "256mb", // modify text body
//       formidable: {
//         maxFileSize: 250 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
//       },
//     },
//   },
// ];


module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "https://elordaecosystem.kz",       // твой фронт
        "https://strapi.elordaecosystem.kz" // если админка/апи открывается снаружи
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
        maxFileSize: 250 * 1024 * 1024,
      },
    },
  },
];