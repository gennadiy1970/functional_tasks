// const arr = [1, 2, 3, 5, 8, 13];
const seils = [120, 240, 360, 600, 840, 1200];

// сумма с начальным значением -100
// сумма НДС 
// сумма индексов
// сумма индексов + длина масcива


// String - конкатенация
// Работа со строкой
// const items = ["home", "about" , "contacts"];
// обернуть `<li><a href="${elem}">${elem}</a></li>` и получить строку


// Работа с объектом 
const arr = [{age:1},{age:2},{age:3},{age:5},{age:8},{age:13}] 
// сумма по ключу age
// сумма по ключу age с деструктуризацией
const res = arr.reduce((accum, elem) => accum + elem.age, 0); 
// создать объект с ключами всех index и соотвествующих значений
// 3-мя способами - ({return}), Object.assign, ({...}
// подсчет совпавших элементов массива 
// const skills = ["js", "html", "css", "react", "js", "html", "css", "html", "css", "html"];

console.log(res)



























// const res = arr.reduce((accum, elem) => accum + elem.age, 0);
// const res = arr.reduce((accum, {age}) => accum + age, 0); 
/*
const res = skills.reduce((acc, elem) => {
	if(!acc[elem]) {
		acc[elem] = 1
	} else {
		acc[elem] += 1
	}
	return acc;
},{})
*/


// const res = arr.reduce((accum, elem, index) =>({...accum, [index]: elem}), {});
// const res = arr.reduce((accum, elem, index) => Object.assign(accum, accum[index] = elem), {});
/*
const res = arr.reduce((accum, elem, index) => {
	accum[index] = elem;
	return accum;
	}, {});
	*/

// const sum = seils.reduce((accum, elem) => accum + elem / 6 );
//const sum = arr.reduce((accum, elem) => accum + elem, -100 );