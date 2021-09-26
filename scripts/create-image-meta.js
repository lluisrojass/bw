const { resolve } = require('path')
const { readFileSync, writeFile } = require('fs')
const { parse } = require('yaml')
const Batch = require('./utils/Batch')
const Paths = require('./utils/Paths')

const batch = new Batch()

const createMetaFile = (id, content) => {
  const path = Paths.getImageMetaPath()
  const fileSlug = `${id}.json`
  const filePath = resolve(path, fileSlug)
  const contentStringified = JSON.stringify(content, null, 4)

  writeFile(filePath, contentStringified, { encoding: 'utf-8' }, (err) => {
    if (err) {
      console.error(`Unexpected error writing image meta \`${fileSlug}\`, ${err}`)
      throw err
    }

    console.log(`- (√) emitted image meta \`${fileSlug}\``)
    batch.completeTask()
  })
};

(() => {
  batch.start()
  const path = Paths.getSiteYamlFilePath()
  const file = readFileSync(path, { encoding: 'utf-8' })
  const siteYmlObject = parse(file)
  const { images } = siteYmlObject

  batch.addTask(images.length)
  images.forEach(imageEntry => createMetaFile(imageEntry.id, imageEntry))
})()
