const { resolve } = require('path');

class LocalRepoRoutes {
  static getSiteYamlFilePath() {
    return resolve(
      __dirname,
      '../../site.yml'
    );
  }

  static getDirectoryAssetPath(assetName) {
    return resolve(
      LocalRepoRoutes.getDirectoryPath(),
      assetName
    );
  }

  static getDirectoryPath() {
    return resolve(
      __dirname,
      '../../src/static/page-directories/'
    );
  }

  static getPagesAssetPath(assetName) {
    return resolve(
      LocalRepoRoutes.getPagesPath(),
      assetName
    );
  }

  static getPagesPath() {
    return resolve(
      __dirname,
      '../../src/static/pages'
    );
  }

  static getPublicImageSmallVariantAssetPath(assetName) {
    return resolve(
      LocalRepoRoutes.getPublicImageSmallVariantPath(),
      assetName
    );
  }

  static getPublicImageSmallVariantPath() {
    return resolve(
      LocalRepoRoutes.getPublicImagePath(),
      './small'
    );
  }

  static getPublicImageLargeVariantAssetPath(assetName) {
    return resolve(
      LocalRepoRoutes.getPublicImageLargeVariantPath(),
      assetName
    );
  }

  static getPublicImageLargeVariantPath() {
    return resolve(
      LocalRepoRoutes.getPublicImagePath(),
      './large'
    );
  }

  static getPublicImageMediumVariantAssetPath(assetName) {
    return resolve(
      LocalRepoRoutes.getPublicImageMediumVariantPath(),
      assetName
    );
  }

  static getPublicImageMediumVariantPath() {
    return resolve(
      LocalRepoRoutes.getPublicImagePath(),
      './medium'
    );
  }

  static getPublicImageMetaPath() {
    return resolve(
      LocalRepoRoutes.getPublicImagePath(),
      './meta'
    );
  }

  static getPublicImagePath() {
    return resolve(
      __dirname,
      '../../src/static/images'
    );
  }

  static getPrivateImageAssetPath(assetName) {
    return resolve(
      LocalRepoRoutes.getPrivateImageDirPath(),
      assetName
    );
  }

  static getPrivateImageDirPath() {
    return resolve(
      __dirname,
      '../../images'
    );
  }
}

module.exports = LocalRepoRoutes;
