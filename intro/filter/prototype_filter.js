Array.prototype._filter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const arr = [10, 20, 30, 40, 50, 60];

const res = arr._filter(e => e > 30);
console.log(res);  // [40, 50, 60]

const negative = arr._filter(e => e > 300);
console.log(negative); // []
