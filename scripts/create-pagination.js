const md5 = require('md5');
const Site = require('./utils/Site');
const Batch = require('./utils/Batch');
const Page = require('./utils/Page');

const batch = new Batch();
const pageSize = Number(process.env.PAGE_SIZE);

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
};

const createPagesWithFileNames = pages => (
  pages.map((images, index) => ({
    fileName: createPageFileSlug(`${index}-${md5(JSON.stringify(images))}`),
    images
  }))
);

const emitPhotostreamDirectory = async(dirObj) => {
  batch.addTask();
  const fileSlug = 'default.json';
  const contents = JSON.stringify(dirObj, null, 4);
  await Page.emitDirectoryFile(fileSlug, contents);
  batch.completeTask();
};

const emitPageFile = async(fileName, pageContents) => {
  batch.addTask();
  await Page.emitPageFile(fileName, JSON.stringify(pageContents, null, 4));
  batch.completeTask();
};

(() => {
  batch.start();
  const images = Site.getImages();
  const pages = paginate(images);
  const pagesWithFileNames = createPagesWithFileNames(pages);

  emitPhotostreamDirectory(pagesWithFileNames.map(page => page.fileName));
  pagesWithFileNames.forEach(({ fileName, images }) => {
    emitPageFile(fileName, images);
  });
})();
