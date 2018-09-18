{

   Array.prototype._reduce = function (callback) {
      let accum = this[0];
      for (let i = 1; i < this.length; i += 1) {
         accum = callback(accum, this[i], i, this)
      }
      return accum;
   }

   const arr = [10, 20, 30, 40, 50];
   const res = arr._reduce((acc, elem) => acc + elem);
   res
}


/*
150
*/