import AppPaths from './AppPaths';

class ImageVariantPaths {
  static createLargeImageDirPath() {
    return [
      AppPaths.createImageDirPath(),
      '/large'
    ].join('');
  }

  static createSmallImageDirPath() {
    return [
      AppPaths.createImageDirPath(),
      '/small'
    ].join('');
  }

  static createMediumImageDirPath() {
    return [
      AppPaths.createImageDirPath(),
      '/medium'
    ].join('');
  }

  static createLargeImagePath(id) {
    return [
      ImageVariantPaths.createLargeImageDirPath(),
      `/${id}.jpeg`
    ].join('');
  }

  static createMediumImagePath(id) {
    return [
      ImageVariantPaths.createMediumImageDirPath(),
      `/${id}.jpeg`
    ].join('');
  }

  static createSmallImagePath(id) {
    return [
      ImageVariantPaths.createSmallImageDirPath(),
      `/${id}.jpeg`
    ].join('');
  }
}

export default ImageVariantPaths;