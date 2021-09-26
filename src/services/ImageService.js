class ImageService {
  static getImageMeta(imageId) {
    const metaFile = require(`../static/images/meta/${imageId}.json`)
    return JSON.parse(JSON.stringify(metaFile))
  }
}

export default ImageService
