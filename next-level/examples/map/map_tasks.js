const arr = [10, 20, 30, 50, 80, 130];
// const res = arr.map((elem, index) => elem * index);

// Работа со строкой
const items = ["home", "about" , "contacts"];
// обернуть `<li><a href="${elem}">${elem}</a></li>` и получить строку


// Работа с объектами
// получить массив объектов [{age:10}, {age: 20} ...]
// получить массив объектов {index: elem}

// извлечь из массива объектов значения age
// const arrObj = [{age:10}, {age: 20}, {age: 30}, {age:50}, {age:80}, {age:130}]

// извлечь из массива объектов ключи
const arrObj = [{"one":10}, {"two": 20}, {"three": 30}, {"four":50}, {"five":80}, {"six":130}]

// заменить значение у ключа two на 200
// const res = arrObj.map(elem =>  elem["two"] ? ({...elem,...elem["two"] = 200}) : elem);
// заменить ключа two на twenty

// Работа со вложенными массивами
// flat получить массив значений из вложенных массивов
// const noFlat = [[10, 20], [30, 50], 80, 130];
// получить объекты из вложенных массивов key = [][0], value = [][1], не изменять элементы
const res = arr.map((elem, index) => elem * index);
console.log(res)


















/*
const res = arrObj.map(elem =>  {
	if(elem["two"]){
		elem["twenty"] = elem["two"];
		delete elem["two"]	;
		return elem;
	} else {
		return elem;
    }
});
*/

/*
const res = arrObj.map(elem =>  elem["two"] ? ({...elem, ...elem["two"]=200}) : elem);
  или
const res = arrObj.map(elem => {
	if(elem["two"]) {
		elem["two"] = 200;
		return elem;
	}
	return elem;
});
*/
// const res = noFlat.map(elem => Array.isArray(elem) ? {[elem[0]]: elem[1]} : elem);
// const res = arrObj.map((elem, index) => Object.keys(elem)[0]);
// const res = arrObj.map((elem, index) => elem.age);
// const res = arr.map((elem, index) => ({[index]: elem}));
// const res = arr.map(elem => Array.isArray(elem) ? [...elem] : elem);