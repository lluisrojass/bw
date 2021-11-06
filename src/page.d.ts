import { ImagePage } from './types';

declare module '*/static/pages/*' {
  const page: ImagePage;
  export default page;
}
