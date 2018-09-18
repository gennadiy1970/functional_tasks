const array = [1,2,3,5,8,13,21,34,55,89];
const num = 10;
const result = array.filter(e => e > num)

function isAddedIndex(src, dist) {
    if(src.length !== dist.length) return false;
    for(let i = 0; i < src.length; i += 1) {
        if( src[i] !== dist[i]) return false;
    }
    return true;
}

const test =  [13,21,34,55,89];

console.info( isAddedIndex(test,result) ? 'added' : 'no added')
console.log(result);
