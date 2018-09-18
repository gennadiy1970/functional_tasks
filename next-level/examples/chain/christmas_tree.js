const MAX = 14;

const array = Array(MAX)
                .fill('')
                .map((e,i) => e = Array(MAX)
                                    .fill('')
                                    .map((el,id) =>  id >= i ? "**" : " ")
                                    .join('')
                                    .slice(0,-1)
                )
                .reverse()
                .join('\n')


console.log(array);
                                    
