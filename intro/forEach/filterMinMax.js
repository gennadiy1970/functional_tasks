const array = [1,2,3,5,8,13,21,34,55,89];
const MIN = 10;
const MAX = 50;
const result = []

array.forEach(function (element, index, array) {
    if(element >= MIN && element <= MAX ) {
        result.push(element)
    }
})

function isAddedIndex(src, dist) {
    if(src.length !== dist.length) return false;
    for(let i = 0; i < src.length; i += 1) {
        if( src[i] !== dist[i]) return false;
    }
    return true;
}

const test =  [13,21,34];

console.info( isAddedIndex(test,result) ? 'added' : 'no added')
console.log(result);
