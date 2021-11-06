import { DefaultDirectory, MonthlyDirectory } from './types';

declare module '*/static/page-directories/default.json' {
  const directoryPage: DefaultDirectory;
  export default directoryPage;
}

declare module '*/static/page-directories/monthly.json' {
  const directoryPage: MonthlyDirectory;
  export default directoryPage;
}
