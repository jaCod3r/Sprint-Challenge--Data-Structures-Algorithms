const heapsort = arr => {
  /* Your code here */
  const heap = new Heap();

  const sorted = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    heap.insert(array[i]);
  }

  for (let i = arrary.length - 1; i > -1; i--) {
    sorted[i] = heap.delete;
  }
  return sorted;
};

class Heap {
  constructor() {
    this.storage = [null];
    this.size = 0;
  }

  insert(val) {
    const index = this.storage.push(val) - 1;
    this.size++;
    this.bubbleUp(index);
  }

  delete() {
    if (this.storage.length === 2) {
      this.size--;
      return this.storage.pop();
    } else if (this.storage.length === 1) {
      return this.storage[0];
    }
    this.size--;
    const max = this.storage[1];
    this.storage[1] = this.storage.pop();
    this.siftDown(1);
    return max;
  }

  getMax() {
    return this.storage[1];
  }

  getSize() {
    return this.size;
  }

  bubbleUp(index) {
    const parent = Math.floor(index / 2);
    if (parent > 0 && this.storage[parent] < this.storage[index]) {
      [this.storage[parent], this.storage[index]] = [this.storage[index], this.storage[parent]];
      this.bubbleUp(parent);
    }
  }

  siftDown(index) {
    const child1 = index * 2;
    const child2 = index * 2 + 1;
    let maxChild;

    if (this.storage[child1] !== undefined) {
      if (this.storage[child2] === undefined) {
        maxChild = child1;
      } else if (this.storage[child2] !== undefined) {
        maxChild = this.storage[child1] > this.storage[child2] ? child1 : child2;
      }

      if (this.storage[index] < this.storage[maxChild]) {
        [this.storage[maxChild], this.storage[index]] = [this.storage[index], this.storage[maxChild]];
        this.siftDown(maxChild);
      }
    }
  }
}

module.exports = {
  Heap,
  heapsort
};
