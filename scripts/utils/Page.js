const { writeFile } = require('fs');
const LocalRepoRoutes = require('../routes/LocalRepoRoutes');

class Page {
  static emitPageFile(fileName, contents) {
    const filePath = LocalRepoRoutes.getPagesAssetPath(fileName);

    writeFile(filePath, contents, { encoding: 'utf-8' }, (err) => {
      if (err) {
        console.error(`Unexpected error writing page file \`${fileName}\`, ${err}`);
        throw err;
      }

      console.log(`- (√) emitted page file \`${fileName}\``);
    });
  }

  static emitDirectoryFile(fileName, contents) {
    const filePath = LocalRepoRoutes.getDirectoryAssetPath(fileName);
    writeFile(filePath, contents, { encoding: 'utf-8' }, (err) => {
      if (err) {
        console.error(`Unexpected error writing directory file \`${fileName}\`, ${err}`);
        throw err;
      }

      console.log(`- (√) emitted directory file \`${fileName}\``);
    });
  };
}

module.exports = Page;
