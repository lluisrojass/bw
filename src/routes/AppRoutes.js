/**
 * Utilities for generating and asserting routes.
 */
class AppRoutes {
  /**
   * Assert if a string matches the about page slug.
   *
   * @param {String} maybeAboutPath
   * @returns {Boolean} assertion
   *
   * @public
   */
  static isAboutPage(maybeAboutPath) {
    return maybeAboutPath === AppRoutes.createAboutSlug();
  }

  /**
   * Assert if a string matches the home page slug ("/")
   *
   * @param {String} maybeHomePath
   * @returns {Boolean} assertion
   *
   * @public
   */
  static isHomePage(maybeHomePath) {
    return maybeHomePath === AppRoutes.createHomeSlug();
  }

  /**
   * Assert if a page is the monthly page slug
   *
   * @param {String} maybeMonthlySlug
   * @returns {Boolean} assertion
   *
   * @public
   */
  static isMonthlyPage(maybeMonthlySlug) {
    return maybeMonthlySlug === AppRoutes.createMonthlySlug();
  }

  /**
   * Create monthly page slug
   *
   * @returns {String} slug
   *
   * @public
   */
  static createMonthlySlug() {
    return '/monthly';
  }

  /**
   * generate homepage slug
   *
   * @returns {String} homepage slug
   *
   * @public
   */
  static createHomeSlug() {
    return '/';
  }

  /**
   * create the slug for the about page
   *
   * @returns {String} slug
   *
   * @public
   */
  static createAboutSlug() {
    return '/about';
  }

  /**
   * Create application prefix
   *
   * @returns {String} app prefix
   *
   * @public
   */
  static createAppPrefix() {
    return '/bw';
  };

  /**
   * Create image directory slug
   *
   * @returns {String} images directory slug
   *
   * @public
   */
  static createImageSlug() {
    return '/images';
  }

  /**
   * Create the public image directory path
   *
   * @returns {String} public image directory slug (with app prefix)
   *
   * @public
    */
  static createImageDirPath() {
    return [
      AppRoutes.createAppPrefix(),
      AppRoutes.createImageSlug()
    ].join('');
  }

  /**
   * Create path to image resource
   *
   * @param {String} id - image id
   * @returns {String}
   *
   * @public
   */
  static createInternalImagePath(id) {
    return [
      '/image',
      `/${id}`
    ].join('');
  }
};

export default AppRoutes;
