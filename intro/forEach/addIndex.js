const array = [1,2,3,5,8,13,21,34,55,89];

const result = [];

array.forEach(function (element, index, array) {
    result[index] = index
})


function isAddedIndex(src, dist) {
    if(src.length !== dist.length) return false;
    for(let i = 0; i < src.length; i += 1) {
        if( i !== dist[i]) return false;
    }
    return true;
}


console.info( isAddedIndex(array,result) ? 'added' : 'no added')
console.log(result);
