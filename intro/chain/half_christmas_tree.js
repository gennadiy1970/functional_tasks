const MAX = 15;

const array = Array(MAX)
    .fill(undefined)
    .map((e,i) =>  Array(MAX)
                    .fill(undefined)
                    .map((el,id) => id >= i ? "*" : " ")
                    .join('')
    )
    .reverse()
    .join('\n')


console.log(array);

