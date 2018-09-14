class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.compareFunction = function (a,b) {
      return a - b;
    }
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    var arrNew = [];
    for(var i=0; i<indices.length; i++){
      arrNew.push(this.arr[indices[i]]);
    }
    arrNew.sort(this.compareFunction);
    indices.sort(function(c,d) {
      return c-d
    });
    for(i=0; i<indices.length; i++){
      this.arr[indices[i]] = arrNew[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;