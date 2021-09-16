const crypto = require('crypto');
const { resolve, join } = require('path');
const { exec } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const assert = require('assert');
const yaml = require('yaml');

const createSiteYmlFileName = () => resolve(__dirname, '../site.yml');

const parseSiteYmlFile = () => {
  const path = createSiteYmlFileName();
  const file = readFileSync(path, { encoding: 'utf-8' });
  return yaml.parse(file);
}

const createEmptyImageEntry = (id) => ({
  id,
  takenTimestamp: null,
  importTimestamp: Date.now(),
  description: null,
  location: null
});

const appendEmptyEntry = (siteYml, id) => {
  const imageEntry = createEmptyImageEntry(id);
  const siteYmlCopy = { ...siteYml };
  
  siteYmlCopy.images = siteYmlCopy.images || [];
  siteYmlCopy.images.push(imageEntry);
  
  return siteYmlCopy;
};

const overwriteSiteYml = (newSiteYmlObject) => {
  const path = createSiteYmlFileName();
  const contents = yaml.stringify(newSiteYmlObject);
  writeFileSync(path, contents);
};

const moveFile = (fromPath, toPath) => {
  return new Promise((resolve, reject) => {
    exec(`cp ${fromPath} ${toPath}`, (error, stderr, stdout) => {
      if (error) {
        reject(error);
        return;
      } else if (stderr) {
        reject(new Error(stderr));
        return;
      } else if (stdout) {
        console.log(stdout);
      }

      resolve();
    });
  });
};


(async () => {
  const sourceFilePath = process.argv[2];
  assert(sourceFilePath, `Missing source file path argument`);
  
  const targetDir = resolve(__dirname, '../images');
  const fileId = crypto.randomBytes(6).toString('hex');
  const targetPath = join(targetDir, `${fileId}.jpeg`);

  await moveFile(sourceFilePath, targetPath);

  const siteYamlObject = parseSiteYmlFile();
  const modifiedSiteYmlObject = appendEmptyEntry(siteYamlObject, fileId);
  
  overwriteSiteYml(modifiedSiteYmlObject);
})();