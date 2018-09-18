const MAX = 15;

let array = Array(MAX).fill('');
const result = [];


array.forEach(function (element, index, array) {
   element = Array(MAX).fill('');
   element.forEach(function (el, id, arr) {
        element[id] =  id >= index ? "*" : " "
   })
   result.push(element.join(''))
})

const string = result.reverse().join('\n')
console.log(string);
