'use strict';

/**
 * pto service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pto.pto');
