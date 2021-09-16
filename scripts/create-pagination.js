const { readFileSync, writeFile } = require('fs');
const { parse } = require('yaml');
const { resolve } = require('path');
const md5 = require('md5');
const Batch = require('./batch');

const batch = new Batch();
const pageSize = Number(process.env.PAGE_SIZE);

const getSiteYamlFilePath = () => resolve(__dirname, '../site.yml');
const getDirectoryPath = () => resolve(__dirname, '../src/static/directories/');
const getPagesPath = () => resolve(__dirname, '../src/static/pages/');

const createPageFileSlug = id => `${id}.json`;

const paginate = (images) => {
  const sortedImages = images.sort((imgA, imgB) => {
    return imgB.takenTimestamp - imgA.takenTimestamp;
  });
  const sortedImageIds = sortedImages.map(image => image.id);
 
  const numPages = pageSize > sortedImageIds.length 
    ? 1 
    : Math.ceil(sortedImageIds.length / pageSize);
  
  const finalPages = [];
  let cursor = [...sortedImageIds];

  for (let i = 0; i < numPages; i += 1) {
    const pageLength = cursor.length > pageSize ? pageSize : cursor.length; 
    const imageIds = cursor.slice(0, pageLength);

    finalPages.push(imageIds);
    cursor = cursor.slice(pageLength);
  }

  return finalPages;
}

const createDefaultDirectory = (pages) => (
  pages.map((images, index) => ({
    fileName: createPageFileSlug(`${index}-${md5(JSON.stringify(images))}`),
    images,
  }))
);

const emitPhotostreamDirectory = (dirObj) => {
  const fileSlug = 'default-photostream.json';
  const filePath = resolve(getDirectoryPath(), fileSlug);
  const contents = JSON.stringify(dirObj, null, 4);
  batch.addTask();

  writeFile(filePath, contents, { encoding: 'utf-8' }, (err) => {
    if (err) {
      console.error(`Unexpected error writing directory file \`${fileSlug}\`, ${err}`);
      throw err;
    }

    console.log(`- (√) emitted directory \`${fileSlug}\``);
    batch.completeTask();
  });
};

const emitPageFile = (fileName, pageContents) => {
  const filePath = resolve(getPagesPath(), fileName);
  const contents = JSON.stringify(pageContents, null, 4);

  batch.addTask();

  writeFile(filePath, contents, { encoding: 'utf-8' }, (err) => {
    if (err) {
      console.error(`Unexpected error writing page file \`${fileName}\`, ${err}`);
      throw err;
    }

    console.log(`- (√) emitted page \`${fileName}\``);
    batch.completeTask();
  });
}

const createHybridDirectory = (directory) => {
  const hybridDirectory = {};
  directory.forEach(({ fileName, images }, index) => {
    if (index === 0) {
      hybridDirectory[index] = images;
    } else {
      hybridDirectory[index] = fileName;
    }
  });
  return hybridDirectory;
};

(() => {
  batch.start();
  const path = getSiteYamlFilePath();
  const file = readFileSync(path, { encoding: 'utf-8' });

  const siteYmlObject = parse(file);
  const { images } = siteYmlObject;

  const pages = paginate(images);
  const directory = createDefaultDirectory(pages);
  const hybridDirectory = createHybridDirectory(directory);

  emitPhotostreamDirectory(hybridDirectory);  
  directory.forEach(({ fileName, images }) => {
    emitPageFile(fileName, images);
  });
})();