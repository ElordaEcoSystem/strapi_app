'use strict';

/**
 * paid-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::paid-service.paid-service');
