  const obj = {
    arr: [],
    _map (callback) {

      const newArr = [];
      for(let i = 0; i < this.arr.length; i += 1) {
        let elem = this.arr[i];
        let index = i;
        let array = this.arr;
        newArr[i] = callback(elem, newArr, array)
      }
      return newArr;
    }
  }

  const a = {};
  a.arr = [2,3,5];
  a._map =obj. _map;
  const res =a._map(e => e * 2);
  
  console.log(res)