Array.prototype._map = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i += 1) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const arr = [10, 20, 30, 40, 50, 60];

const res = arr._map(e => e * 10);
console.log(res); // [100, 200, 300, 400, 500, 600]

const negative = arr._map(e => e > 300);
console.log(negative); // []
