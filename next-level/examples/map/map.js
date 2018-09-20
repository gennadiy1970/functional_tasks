const arr = [10, 20, 30, 50, 80, 130];
// const res = arr.map((elem, index) => elem * index);

// Работа со строкой
const items = ['home', 'about', 'contacts', 'shopping'];
/* сгенерировать строку подставив вместо datа значение из массива 
 html <li><a href="/data.html">data</a></li> из массива dates
 */
// сгенерировать ту же строку, но заменить 'home' на 'index' в ссылке



















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