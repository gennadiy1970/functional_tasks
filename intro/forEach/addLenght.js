const array = [1,2,3,5,8,13,21,34,55,89];

const result = array.map((e,i,a) => a.length)

array.forEach(function (element, index, array) {
    result[index] = array.length
})

function isAddedIndex(src, dist) {
    if(src.length !== dist.length) return false;
    let length =  src.length;
    for(let i = 0; i < length; i += 1) {
        if( length !== dist[i]) return false;
    }
    return true;
}


console.info( isAddedIndex(array,result) ? 'added' : 'no added')
console.log('length = ', result.length);
console.log(result);
