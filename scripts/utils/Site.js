const {
  readFileSync,
  writeFileSync
} = require('fs');
const yaml = require('yaml');
const LocalRepoRoutes = require('../routes/LocalRepoRoutes');

class Site {
  static getImages() {
    const siteYml = Site.getSiteYaml();
    return siteYml.images;
  }

  static getSiteYaml() {
    const path = LocalRepoRoutes.getSiteYamlFilePath();
    const file = readFileSync(path, { encoding: 'utf-8' });
    return yaml.parse(file);
  }

  static writeSiteYaml(contents) {
    const path = LocalRepoRoutes.getSiteYamlFilePath();
    const yamlContents = yaml.stringify(contents);
    writeFileSync(path, yamlContents);
  }
}

module.exports = Site;
