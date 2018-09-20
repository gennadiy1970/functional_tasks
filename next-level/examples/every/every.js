 // ============== SOME ===============
// Есть ли в  массиве объект с age < 18
const users = [
    {name: 'Ann', age:10}, 
    {name: 'Bob', age: 20}, 
    {name: 'Cat', age: 25}, 
    {name: 'Donald', age: 18}
]

const result =   users.some(el => el.age < 18)