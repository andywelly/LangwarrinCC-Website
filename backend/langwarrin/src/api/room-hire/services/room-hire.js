'use strict';

/**
 * room-hire service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::room-hire.room-hire');
