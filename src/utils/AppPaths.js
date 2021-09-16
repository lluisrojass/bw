class AppPaths {
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