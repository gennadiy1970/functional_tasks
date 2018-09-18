const array = [1,2,3,5,8,13,21,34,55,89];

// получить массив значений * 12 (к примеру это тарифы за месяц)
// получить массив значений * 3  (к примеру это тарифы за квартал)
// immutable
const month = [...array];

const year = [];
for (let i = 0; i < month.length; i +=1) {
    year[i] =  month[i] * 12
}

console.log(year); 
// [ 12, 24, 36, 60, 96, 156, 252, 408, 660, 1068 ]

const quarter = [];
for (let i = 0; i < month.length; i +=1) {
    quarter[i] =  month[i] *3
}

console.log(quarter); 
[ 3, 6, 9, 15, 24, 39, 63, 102, 165, 267 ]

