Array.prototype._find = function (callback) {
for (let i = 0; i < this.length; i += 1) {
	if(callback(this[i], i, this)){
		return this[i];			
	}
 }
}

const arr = [10, 20, 30, 40, 50, 60];

const res = arr._find(e => e > 30);
console.log(res)  // 40

const negative = arr._findIndex(e => e > 300);
console.log(negative)  // undefined


