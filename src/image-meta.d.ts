import { ImageMeta } from './types';

declare module '*/static/images/meta/*.json' {
  const imageMeta: ImageMeta;
  export default imageMeta;
}
