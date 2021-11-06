import { ImageMeta } from '~/types';
import MiscUtils from '~/utils/misc';

/**
 * A service to access image specific metadata.
 */
class ImageMetaService {
  static getImageMeta(imageId: string): ImageMeta {
    const metaFile = require(`../static/images/meta/${imageId}.json`) as ImageMeta;
    return MiscUtils.deepCopy(metaFile);
  }
}

export default ImageMetaService;
