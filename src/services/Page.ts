import defaultDirectory from '~/static/page-directories/default.json';
import monthlyDirectory from '~/static/page-directories/monthly.json';
import { ImagePage, MonthlyImagePage } from '~/types';
import MiscUtils from '~/utils/misc';

/**
 * A service to access & make assertion about image page files.
 */
class PageService {
  static getDefaultPhotostreamPage(pageNumber: number): ImagePage {
    const pageIndex = pageNumber - 1;
    const fileName = defaultDirectory[pageIndex];
    const page = require(`../static/pages/${fileName}`) as ImagePage;
    return MiscUtils.deepCopy(page);
  }

  static getMonthlyPhotostreamPage(pageNumber: number): MonthlyImagePage {
    const index = pageNumber - 1;
    const { fileName, title } = monthlyDirectory[index];
    const imageIds = require(`../static/pages/${fileName}`) as ImagePage;
    const imageIdsCopy = MiscUtils.deepCopy(imageIds);
    const titleCopy = MiscUtils.deepCopy(title);

    return {
      title: titleCopy,
      imageIds: imageIdsCopy
    };
  }

  static hasMonthlyPage(pageNumber: number): boolean {
    return !!monthlyDirectory[pageNumber - 1];
  }

  static hasDefaultPhotostreamPage(pageNumber: number): boolean {
    return !!defaultDirectory[pageNumber - 1];
  }
}

export default PageService;
