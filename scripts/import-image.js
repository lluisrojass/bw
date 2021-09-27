const crypto = require('crypto');
const assert = require('assert');
const Site = require('./utils/Site');
const LocalRepoRoutes = require('./routes/LocalRepoRoutes');
const Shell = require('./utils/Shell');
const Exif = require('./utils/Exif');

const createImageEntry = (id, exifData) => {
  const altitude = (!!exifData && !!exifData.gps && exifData.gps.GPSAltitude) || null;
  const lat = (!!exifData && !!exifData.gps && exifData.gps.GPSLatitude) || null;
  const lon = (!!exifData && !!exifData.gps && exifData.gps.GPSLongitude) || null;
  const latRef = (!!exifData && !!exifData.gps && exifData.gps.GPSLatitudeRef) || null;
  const lonRef = (!!exifData && !!exifData.gps && exifData.gps.GPSLongitudeRef) || null;

  let decimalLat;
  let decimalLon;

  const currentTimezone = typeof Intl === 'object'
    ? Intl.DateTimeFormat().resolvedOptions().timeZone
    : 'America/New_York';

  if (Array.isArray(lat) && !!latRef) {
    decimalLat = lat[0] + (lat[1] / 60) + (lat[2] / 3600);
    if (latRef.toUpperCase() !== 'N') {
      decimalLat = -decimalLat;
    }
  }

  if (Array.isArray(lon) && !!lonRef) {
    decimalLon = lon[0] + (lon[1] / 60) + (lon[2] / 3600);
    if (lonRef.toUpperCase() !== 'E') {
      decimalLon = -decimalLon;
    }
  }

  return {
    id,
    takenTimestamp: null,
    importTimestamp: Date.now(),
    description: null,
    location: {
      altitude,
      lat: decimalLat,
      lon: decimalLon,
      timeZone: currentTimezone,
      readable: null
    }
  };
};

const appendEmptyEntry = (siteYml, imageEntry) => {
  const siteYmlCopy = { ...siteYml };

  siteYmlCopy.images = siteYmlCopy.images || [];
  siteYmlCopy.images.push(imageEntry);

  return siteYmlCopy;
};

(async() => {
  const sourceFilePath = process.argv[2];
  assert(sourceFilePath, 'Missing source file path argument');

  const fileId = crypto.randomBytes(6).toString('hex');
  const targetPath = LocalRepoRoutes
    .getPrivateImageAssetPath(`${fileId}.jpeg`);
  const siteYaml = Site.getSiteYaml();
  await Shell.moveFile(sourceFilePath, targetPath);

  const imageExifData = await Exif.getExifData(targetPath);
  const imageEntry = createImageEntry(fileId, imageExifData);
  const modifiedSiteYmlObject = appendEmptyEntry(siteYaml, imageEntry);

  Site.writeSiteYaml(modifiedSiteYmlObject);
})();
