# What is this?

A diary of pictures taken by yours truly.

View here: https://lluisrojass.github.io/bw/

# Scripts 

## `npm run import-image` 

Onboard an image onto the project. This script will copy the image onto the `images` directory, with an appropriate name and create an entry in `site.yml`. This script uses image exif data to source lat/lon and the local machine env for timezone information. After the script executes, you must go into the `site.yml` and manually add required property values `takenTimestamp` and `location.readable`. 

## `npm run paginate`

Creates photostream pages and directory files. Each page contains a list of member imageIds. Each directory maps a page number to a page file. Page sizes are controlled by the `PAGE_SIZE` env variable defined in child scripts `paginate-stream` and `paginate-monthly`.

## `npm run create-image-meta`

Process images in `site.yml` to produce metadata files for each image. 

## `npm run create-image-variants` 

Process images to produce multi-sized variants (`small`, `medium`, `large`), emitted to respective public image directories. This script can sometimes take time to complete (~180s on my local). 

## `npm run prepare-build`

Invokes `create-image-variants`, `create-image-meta` and `paginate` scripts.

## `npm run dev` 

Create a local development script.

## `npm run generate` 

Create a production build.

