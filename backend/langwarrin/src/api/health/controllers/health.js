'use strict';

/**
 * health controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::health.health');
