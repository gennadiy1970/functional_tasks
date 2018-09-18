const MAX = 15;

const array = Array(MAX)
                .fill('')
                .map((e,i) => e = Array(MAX)
                                    .fill('')
                                    .map((el,id) => id >= i ? "*" : " ")
                                    .join('')
                )
                .reverse()
                .join('\n')


console.log(array);
                                    
