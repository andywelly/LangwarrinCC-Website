'use strict';

/**
 * childcare service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::childcare.childcare');
