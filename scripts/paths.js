const { resolve } = require('path');

class Paths {
  static getSiteYamlFilePath() {
    return resolve(__dirname, '../site.yml');
  }

  static getDirectoryPath() {
    return resolve(__dirname, '../src/static/page-directories/');
  }

  static getPagesPath() {
    return resolve(__dirname, '../src/static/pages/');
  }

  static getImageMetaPath() {
    return resolve(__dirname, '../src/static/images/meta');
  }
}

module.exports = Paths;