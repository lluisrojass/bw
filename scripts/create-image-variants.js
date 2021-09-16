const { resolve } = require('path'); 
const { readdirSync } = require('fs');
const jimp = require('jimp');
const Batch = require('./batch');

const batch = new Batch();

const createImagesDir = () => resolve(
  __dirname,
  '../images'
);

const createBuildImageDir = () => resolve(
  __dirname, 
  '../src/static/images'
);

const createSmallVariantPath = fileName => resolve(
  createBuildImageDir(), 
  './small', 
  fileName
);

const createLargeVariantPath = fileName => resolve(
  createBuildImageDir(), 
  './large', 
  fileName
);

const createMediumVariantPath = fileName => resolve(
  createBuildImageDir(), 
  './medium', 
  fileName
);

const emitImageVariant = async (sourcePath, targetPath, resize) => {
  const file = await jimp.read(sourcePath);
  file
    .resize(resize.width, resize.height)
    .write(targetPath);
}

const resizeImage = async (fileName) => {
  const imagesDir = createImagesDir();

  batch.addTask(3);

  console.log(`- processing \`${fileName}\``);
  const sourceImagePath = resolve(imagesDir, fileName);

  const smallTargetImagePath = createSmallVariantPath(fileName);
  await emitImageVariant(sourceImagePath, smallTargetImagePath, { width: 700, height: 700 });
  console.log(`- (√) \`${fileName}\` (small)`)

  const mediumTargetImagePath = createMediumVariantPath(fileName);
  await emitImageVariant(sourceImagePath, mediumTargetImagePath, { width: 1000, height: 1000 });
  console.log(`- (√) \`${fileName}\` (medium)`)

  const largeTargetImagePath = createLargeVariantPath(fileName);
  await emitImageVariant(sourceImagePath, largeTargetImagePath, { width: 1500, height: 1500 });
  console.log(`- (√) \`${fileName}\` (large)`);

  batch.completeTask(3);
}

(() => {
  batch.start();

  const imageDirPath = resolve(__dirname, '../images');
  const files = readdirSync(imageDirPath);
  
  files.forEach(resizeImage);
})();