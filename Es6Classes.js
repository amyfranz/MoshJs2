const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }
  get count() {
    return _items.get(this).length;
  }
  peek() {
    const items = _items.get(this);
    if (items.length < 1) throw new Error("There is currently no stacks");
    return items[items.length - 1];
  }
  pop() {
    const items = _items.get(this);
    if (items.length < 1) throw new Error("There is currently no stacks");
    items.pop();
  }
  push(item) {
    _items.get(this).push(item);
  }
}
