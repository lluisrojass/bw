const { ExifImage } = require('exif');

class Exif {
  static getExifData(filePath) {
    return new Promise((resolve, reject) => {
      /* eslint-disable-next-line no-new */
      new ExifImage({ image: filePath }, (error, exifData) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(exifData);
      });
    });
  }
}

module.exports = Exif;
