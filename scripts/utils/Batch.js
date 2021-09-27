class Batch {
  constructor() {
    this.totalTasks = 0;
    this.doneTasks = 0;
    this.startTimestamp = null;
    this.doneTimestamp = null;
  }

  start() {
    this.startTimestamp = Date.now();
  }

  end() {
    this.doneTimestamp = Date.now();
  }

  addTask(num) {
    const safeNum = num || 1;
    this.totalTasks += safeNum;
  }

  isDone() {
    return this.totalTasks <= this.doneTasks;
  }

  log() {
    const diff = this.doneTimestamp - this.startTimestamp;
    console.log(`- Finished ${this.totalTasks} tasks in ${diff / 1000}s`);
  }

  completeTask(num) {
    const safeNum = num || 1;
    this.doneTasks += safeNum;

    if (this.isDone()) {
      this.end();
      this.log();
    }
  }
}

module.exports = Batch;
