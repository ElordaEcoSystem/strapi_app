'use strict';

const seed = require('../../database/seeds/price-list.json');

const UID = 'api::price-list.price-list';

// Первичное заполнение прайс-листа данными, которые раньше были зашиты в код сайта.
// Срабатывает только если прайс-лист ещё не создан, поэтому правки из админки
// не перезаписываются.
async function seedPriceList(strapi) {
  const existing = await strapi.entityService.findMany(UID);
  if (existing) return;

  await strapi.entityService.create(UID, { data: seed });
  strapi.log.info('[price-list] прайс-лист заполнен начальными данными');
}

// Сайт читает прайс-лист без токена, поэтому роли Public нужно право find
async function allowPublicRead(strapi) {
  const action = `${UID}.find`;
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });
  if (!publicRole) return;

  const permission = await strapi
    .query('plugin::users-permissions.permission')
    .findOne({ where: { action, role: publicRole.id } });
  if (permission) return;

  await strapi
    .query('plugin::users-permissions.permission')
    .create({ data: { action, role: publicRole.id } });
  strapi.log.info(`[price-list] роли Public выдано право ${action}`);
}

module.exports = async function bootstrapPriceList(strapi) {
  await seedPriceList(strapi);
  await allowPublicRead(strapi);
};
