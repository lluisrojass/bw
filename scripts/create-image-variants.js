const { resolve } = require('path');
const { readdirSync } = require('fs');
const jimp = require('jimp');
const Batch = require('./utils/Batch');
const LocalRepoRoutes = require('./routes/LocalRepoRoutes');

const batch = new Batch();

const emitImageVariant = async(sourcePath, targetPath, resize) => {
  const file = await jimp.read(sourcePath);
  file
    .resize(resize.width, resize.height)
    .write(targetPath);
};

const emitSmallImage = async(fileName) => {
  const sourceImagePath = LocalRepoRoutes
    .getPrivateImageAssetPath(fileName);
  const smallTargetImagePath = LocalRepoRoutes
    .getPublicImageSmallVariantAssetPath(fileName);

  await emitImageVariant(
    sourceImagePath,
    smallTargetImagePath,
    { width: 500, height: 500 }
  );
};

const emitMediumImage = async(fileName) => {
  const sourceImagePath = LocalRepoRoutes
    .getPrivateImageAssetPath(fileName);
  const mediumTargetImagePath = LocalRepoRoutes
    .getPublicImageMediumVariantAssetPath(fileName);

  await emitImageVariant(
    sourceImagePath,
    mediumTargetImagePath,
    { width: 800, height: 800 }
  );
};

const emitLargeImage = async(fileName) => {
  const sourceImagePath = LocalRepoRoutes
    .getPrivateImageAssetPath(fileName);
  const largeTargetImagePath = LocalRepoRoutes
    .getPublicImageLargeVariantAssetPath(fileName);

  await emitImageVariant(
    sourceImagePath,
    largeTargetImagePath,
    { width: 1500, height: 1500 }
  );
};

const resizeImage = async(fileName) => {
  batch.addTask(3);

  console.log(`- processing \`${fileName}\``);

  await emitSmallImage(fileName);
  console.log(`- (√) \`${fileName}\` (small)`);

  await emitMediumImage(fileName);
  console.log(`- (√) \`${fileName}\` (medium)`);

  await emitLargeImage(fileName);
  console.log(`- (√) \`${fileName}\` (large)`);

  batch.completeTask(3);
};

(() => {
  batch.start();

  const imageDirPath = resolve(__dirname, '../images');
  const files = readdirSync(imageDirPath);

  files.forEach(resizeImage);
})();
