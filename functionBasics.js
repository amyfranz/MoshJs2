// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: () => {
//     console.log("draw");
//   },
// };

function createCircle(radius) {
  return {
    radius,
    draw: () => {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
// circle.draw();

function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log("draw");
  };
}

const circle2 = new Circle(2);
