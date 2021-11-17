/**
 * Image location metadata object.
 */
export interface ImageLocation {
  lat?: number;
  lon?: number;
  timeZone?: string;
  readable?: string;
}
/**
 * Image metadata object type.
 */
export interface ImageMeta {
  id: string,
  takenTimestamp?: number;
  importTimestamp?: number;
  description?: string;
  location: ImageLocation
}
/**
 * A directory page scoped to a specific month.
 */
export interface MonthyDirectoryPage {
  title: string;
  id: string;
}
/**
 * A page of imageIds specific to a certain month.
 */
export interface MonthlyImagePage {
  title: string;
  imageIds: string[];
}
/**
 * A list of page ids
 */
export type DefaultPhotostreamDirectory = string[];
/**
 * A list of monthly pages, by date descending.
 */
export type MonthlyPhotostreamDirectory = Array<MonthyDirectoryPage>;
/**
 * A list of image ids
 */
export type ImageIdList = string[];
/**
 * A "page", at heart just an ordered list of imageIds
 */
export type ImagePage = ImageIdList[];
