const md5 = require('md5');
const Batch = require('./utils/Batch');
const Page = require('./utils/Page');
const Site = require('./utils/Site');
const MonthlyDirectory = require('./utils/MonthlyDirectory');

const batch = new Batch();

const pageSize = Number(process.env.PAGE_SIZE);

const getReadableMonth = (date, timeZone) => {
  const options = { month: 'long', timeZone };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const getNumericalMonth = (date, timeZone) => {
  const options = { month: 'numeric', timeZone };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const getNumericalYear = (date, timeZone) => {
  const options = { year: 'numeric', timeZone };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const getReadableTitle = (month, year) => (`${month} ${year}`);

const emitPageFile = async(fileName, contents) => {
  batch.addTask();
  await Page.emitPageFile(fileName, JSON.stringify(contents, null, 4));
  batch.completeTask();
};

const emitDirectoryFile = async(contents) => {
  const fileName = 'monthly.json';
  batch.addTask();
  await Page.emitDirectoryFile(fileName, JSON.stringify(contents, null, 4));
  batch.completeTask();
};

(() => {
  const images = Site.getImages();
  const sortedImages = images.sort((a, b) => b.takenTimestamp - a.takenTimestamp);
  const monthlyDirectory = new MonthlyDirectory(pageSize);

  sortedImages.forEach((imageEntry) => {
    const date = new Date(imageEntry.takenTimestamp);

    const readableMonth = getReadableMonth(date);
    const numericalMonth = getNumericalMonth(date);
    const numericalYear = getNumericalYear(date);
    const title = getReadableTitle(readableMonth, numericalYear);

    monthlyDirectory.addTitle(title, numericalMonth, numericalYear);
    monthlyDirectory.addImageId(imageEntry.id, numericalMonth, numericalYear);
  });

  const directory = [];
  for (const month of monthlyDirectory) {
    const { title, pages } = month;

    for (const pageIndex in pages) {
      const page = pages[pageIndex];
      const fileName = `${pageIndex}-${md5(title)}-${md5(JSON.stringify(page))}.json`;
      directory.push({ title, fileName });
      emitPageFile(fileName, page);
    }
  }

  emitDirectoryFile(directory);
})();
