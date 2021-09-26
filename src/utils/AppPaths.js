class AppPaths {
  static isAboutPage(maybeAboutPath) {
    return maybeAboutPath === AppPaths.createAboutSlug();
  }

  static isHomePage(maybeHomePath) {
    return maybeHomePath === AppPaths.createHomeSlug();
  }

  static isMonthlyPage(maybeMonthlySlug) {
    return maybeMonthlySlug === AppPaths.createMonthlySlug();
  }

  static createMonthlySlug() {
    return '/monthly';
  }

  static createHomeSlug() {
    return '/';
  }
  
  static createAboutSlug() {
    return '/about';
  }

  static createAppPrefix() {
    return '/bw';
  };
  
  static createDirectoriesSlug() {
    return '/directories'
  }

  static createPagesSlug() {
    return '/pages';
  }

  static createImageSlug() {
    return '/images'
  }

  static createDirectoriesPath() {
    return [
      AppPaths.createAppPrefix(), 
      AppPaths.createDirectoriesSlug()
    ].join('')
  }

  static createPagesPath() {
    return [
      AppPaths.createAppPrefix(), 
      AppPaths.createPagesSlug()
    ].join('');
  }

  static createImageDirPath() {
    return [
      AppPaths.createAppPrefix(), 
      AppPaths.createImageSlug()
    ].join('');
  }

  static createInternalImagePath(id) {
    return [
      '/image',
      `/${id}`
    ].join('');
  }
};

export default AppPaths;