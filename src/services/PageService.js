import defaultDirectory from '../static/page-directories/default.json';
import monthlyDirectory from '../static/page-directories/monthly.json';

class PageService {
  static getPhotostreamPage(pageNumber) {
    const pageIndex = pageNumber - 1;
    const fileName = defaultDirectory[pageIndex];
    return require(`../static/pages/${fileName}`);
  }

  static hasPhotostreamPage(pageNumber) {
    return !!defaultDirectory[pageNumber - 1];
  }

  static getMonthlyPage(pageNumber) {
    const index = pageNumber - 1;
    const { fileName, title } = monthlyDirectory[index];
    const ids = require(`../static/pages/${fileName}`);
    return {
      title,
      imageIds: ids
    };
  }

  static hasMonthlyPage(pageNumber) {
    return !!monthlyDirectory[pageNumber - 1];
  }
}

export default PageService;
