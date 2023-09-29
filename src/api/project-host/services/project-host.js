'use strict';

/**
 * project-host service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-host.project-host');
