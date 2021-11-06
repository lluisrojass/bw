/**
 * An entity for misc, uncategorized utilities.
 */
class MiscUtils {
  public static deepCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }
}

export default MiscUtils;
