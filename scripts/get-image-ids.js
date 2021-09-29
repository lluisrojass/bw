const Site = require('./utils/Site');

module.exports = Site.getImages().map(image => image.id);
