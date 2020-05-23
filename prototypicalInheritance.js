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
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
