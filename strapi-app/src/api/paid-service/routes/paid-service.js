'use strict';

/**
 * paid-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::paid-service.paid-service');
