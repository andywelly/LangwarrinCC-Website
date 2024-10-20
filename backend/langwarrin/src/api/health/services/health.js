'use strict';

/**
 * health service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::health.health');
