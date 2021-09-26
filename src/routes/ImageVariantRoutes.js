import AppRoutes from './AppRoutes'

/**
 * Utilities to create image variant paths
 */
class ImageVariantRoutes {
  /**
   * Create large image directory path
   *
   * @returns {String} public directory path
   *
   * @public
   */
  static createLargeImageDirPath() {
    return [
      AppRoutes.createImageDirPath(),
      '/large'
    ].join('')
  }

  /**
   * Create small image directory path
   *
   * @returns {String} public directory path
   *
   * @public
   */
  static createSmallImageDirPath() {
    return [
      AppRoutes.createImageDirPath(),
      '/small'
    ].join('')
  }

  /**
   * Create medium image directory path
   *
   * @returns {String} public directory path
   *
   * @public
   */
  static createMediumImageDirPath() {
    return [
      AppRoutes.createImageDirPath(),
      '/medium'
    ].join('')
  }

  /**
   * Create path for a `large` image resource.
   *
   * @param {String} id - image id
   * @returns {String} public resource path
   *
   * @public
   */
  static createLargeImagePath(id) {
    return [
      ImageVariantRoutes.createLargeImageDirPath(),
      `/${id}.jpeg`
    ].join('')
  }

  /**
   * Create path for a `medium` image resource.
   *
   * @param {String} id - image id
   * @returns {String} public resource path
   *
   * @public
   */
  static createMediumImagePath(id) {
    return [
      ImageVariantRoutes.createMediumImageDirPath(),
      `/${id}.jpeg`
    ].join('')
  }

  /**
   * Create path for a `small` image resource.
   *
   * @param {String} id - image id
   * @returns {String} public resource path
   *
   * @public
   */
  static createSmallImagePath(id) {
    return [
      ImageVariantRoutes.createSmallImageDirPath(),
      `/${id}.jpeg`
    ].join('')
  }
}

export default ImageVariantRoutes
