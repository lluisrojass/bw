const { resolve } = require('path');
const { writeFile } = require('fs');
const Batch = require('./utils/Batch');
const LocalRepoRoutes = require('./routes/LocalRepoRoutes');
const Site = require('./utils/Site');

const batch = new Batch();

const createMetaFile = (id, content) => {
  const path = LocalRepoRoutes.getPublicImageMetaPath();
  const fileSlug = `${id}.json`;
  const filePath = resolve(path, fileSlug);
  const contentStringified = JSON.stringify(content, null, 4);

  writeFile(filePath, contentStringified, { encoding: 'utf-8' }, (err) => {
    if (err) {
      console.error(`Unexpected error writing image meta \`${fileSlug}\`, ${err}`);
      throw err;
    }

    console.log(`- (√) emitted image meta \`${fileSlug}\``);
    batch.completeTask();
  });
};

(() => {
  batch.start();

  const images = Site.getImages();
  batch.addTask(images.length);

  images.forEach(imageEntry => createMetaFile(imageEntry.id, imageEntry));
})();
