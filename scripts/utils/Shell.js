const { exec } = require('child_process');

class Shell {
  static moveFile(fromPath, toPath) {
    return new Promise((resolve, reject) => {
      exec(`cp ${fromPath} ${toPath}`, (error, stderr, stdout) => {
        if (error) {
          reject(error);
          return;
        } else if (stderr) {
          reject(new Error(stderr));
          return;
        } else if (stdout) {
          console.log(stdout);
        }

        resolve();
      });
    });
  }
}

module.exports = Shell;
