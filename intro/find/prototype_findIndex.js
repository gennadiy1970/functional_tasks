Array.prototype._findIndex = function (callback) {
for (let i = 0; i < this.length; i += 1) {
	if(callback(this[i], i, this)){
		return i;			
	}
 }
 return -1;
}

const arr = [10, 20, 30, 40, 50, 60];

const res = arr._findIndex(e => e > 30);
console.log(res)  // 3

const negative = arr._findIndex(e => e > 300);
console.log(negative)  // -1


