function HtmlElement() {
  this.click = () => {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = () => {
  console.log("focus");
};

function HtmlSelectElement(arr = []) {
  this.items = arr;

  this.addItem = (item) => {
    this.items.push(item);
  };

  this.removeItem = (item) => {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = function () {
    return `<select>${this.items
      .map((item) => `<option>${item}</option>`)
      .join("")}</select>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;
  this.render = function () {
    return `<img src="${src}"/>`;
  };
}
