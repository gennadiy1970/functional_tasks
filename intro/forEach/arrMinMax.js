const MIN = 10;
const MAX = 25;


// const result = Array.apply(null, new Array(MAX - MIN + 1))
const result = Array(MAX - MIN + 1).fill(0)

result.forEach(function (element, index, array) {
    result[index] = index + MIN
})

function isAddedIndex(src, dist) {
    if(src.length !== dist.length) return false;
    for(let i = 0; i < src.length; i += 1) {
        if( src[i] !== dist[i]) return false;
    }
    return true;
}

const test = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

console.info( isAddedIndex(test,result) ? 'added' : 'no added')
console.log(result);
