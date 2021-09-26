import defaultDirectory from '../static/page-directories/default-photostream.json';

class PageService {
  static getPage(pageNumber) {
    const pageIndex = pageNumber - 1;
    const fileName = defaultDirectory[pageIndex];
    return require(`../static/pages/${fileName}`);
  }

  static has(pageNumber) {
    return !!defaultDirectory[pageNumber - 1];
  }
}

export default PageService;