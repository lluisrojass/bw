class MonthlyDirectory {
  constructor(pageSize) {
    this.pageSize = pageSize;
    this.sections = {};

    this.addImageId = this.addImageId.bind(this);
    this.addTitle = this.addTitle.bind(this);
    this.createSortableKey = this.createSortableKey.bind(this);
    this.createSectionIfNotExists = this.createSectionIfNotExists.bind(this);
    this.createDefaultSection = this.createDefaultSection.bind(this);
    this[Symbol.iterator] = this.iterator.bind(this);
  }

  *iterator() {
    const sectionKeys = Object.keys(this.sections);
    const sortedSectionKeys = sectionKeys.sort();
    for (let i = sortedSectionKeys.length - 1; i >= 0; i -= 1) {
      const key = sortedSectionKeys[i];
      yield this.sections[key];
    }
  }

  addImageId(id, month, year) {
    const key = this.createSortableKey(month, year);
    this.createSectionIfNotExists(key);

    const currSection = this.sections[key];
    let oldestPage = currSection.pages[currSection.pages.length - 1];
    if (oldestPage.length === this.pageSize) {
      oldestPage = [];
      currSection.pages.push(oldestPage);
    }

    oldestPage.push(id);
  }

  addTitle(title, month, year) {
    const key = this.createSortableKey(month, year);
    this.createSectionIfNotExists(key);
    this.sections[key].title = title;
  }

  createSortableKey(month, year) {
    return [year, month].join('-');
  }

  createSectionIfNotExists(key) {
    this.sections[key] = (
      this.sections[key] ||
      this.createDefaultSection()
    );
  }

  createDefaultSection() {
    return {
      title: null,
      pages: [[]]
    };
  }
}

module.exports = MonthlyDirectory;
