const array = [1,2,3,5,8,13,21,34,55,89];

const result = [];

array.forEach(function (element, index, array) {
    result[index] = element
})


function isEqual(src, dist) {
    if(src.length !== dist.length) return false;
    for(let i = 0; i < src.length; i += 1) {
        if(src[i] !== dist[i]) return false;
    }
    return true;
}


console.info( isEqual(array,result) ? 'equal' : 'no equal')
console.log(result);