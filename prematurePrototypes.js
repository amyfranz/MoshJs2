function StopWatch() {
  let running,
    startTime,
    endTime,
    duration = 0;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });
  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
  });
  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
  });
  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
  });
}
StopWatch.prototype.reset = () => {
  this.duration = 0;
  this.running = false;
  this.startTime = null;
  this.endTime = null;
};
StopWatch.prototype.start = function () {
  if (this.running) {
    throw new Error("Stopwatch has already started");
  }
  this.running = true;
  this.startTime = new Date();
};

StopWatch.prototype.stop = function () {
  if (!this.running) {
    throw new Error("Stopwatch has already stopped");
  }
  this.running = false;
  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};
