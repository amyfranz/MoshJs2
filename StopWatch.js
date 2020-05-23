function StopWatch() {
  let running,
    startTime,
    endTime,
    duration = 0;

  this.reset = () => {
    duration = 0;
    running = false;
    startTime = null;
    endTime = null;
  };
  this.start = () => {
    if (running) {
      throw new Error("Stopwatch has already started");
    }
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) {
      throw new Error("Stopwatch has already stopped");
    }
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
