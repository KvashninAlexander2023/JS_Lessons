// push pop shift unshift - мутирующие (изменяют массив)

// push()
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];

// const result = names.push("123", "testName")

// console.log(names);
// console.log(result);

// pop() - удаляет последний элемент массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];

// const result = names.pop()
// console.log(names);

/////////////////////////////////////////////////
// const array = [1, 2, 3, 4];
// let result = [];

// for (let i = array.length; i > 0; i--) {
//   const test = array.pop();
//   result.push(test);
// }

// console.log(result);
// console.log('array', array);
/////////////////////////////////////////////////

// shift() - удаляет первый элемент и возвращает его значение

// const names = ["Alex", "Bob", "Ivan", "Sasha"];
// const shiftNames = names.shift();
// console.log(names);

// [].shift() - undefined

///////////////////////////////////////////////////

// unshift() - добавляет в начало массива

// const names = ["Alex", "Bob", "Ivan", "Sasha"];
// const shiftNames = names.unshift("hallo");
// console.log(names);
// console.log(shiftNames);

//////////////////////////////////////////////////

// reverse() - переворачивает массив

// const names = ["Alex", "Bob", "Ivan", "Sasha"];
// const shiftNames = names.reverse();
// console.log(names);
// console.log(shiftNames);

///////////////////////////////////////////////////

//split() - метод для работы со строками

// const str = "ab-cd-ef";

// const res = str.split("-");
// console.log(res);// [ 'ab', 'cd', 'ef' ]

// const str = "ab-cd-ef";

// const res = str.split("-", 2);
// console.log(res); //[ 'ab', 'cd']

// join() - обьединяет массив в строку с указанным разделителем (по умолчанию разделитель пустой(разделяет запятыми))

// const str = ["ab", "cd", "ef"];

// const newStr = str.join("-");
// console.log(newStr); //ab-cd-ef

///////////////////
// concat() - не мутирующий метод

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const arr4 = [
//   [10, 15],
//   [25, 26],
// ];

// const res = arr1.concat(arr2, arr3, [11, 12, 13]);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13];
// console.log(res);

// const res = arr1.concat(arr2,arr4)
// console.log(res);

/////////////////////////
// flat() - раскрывает уровни вложенности(по умолчанию 1)
// const res2  = res.flat(Infinity) //- расскрывает все уровни

////////////////////////

//forEach() - перебирает массив, ничего не возвращает

//Array.forEach(function(el, index, array))

//////////////////////////////

// find() - возвращает первый элемент по условию, если нет то undefined

// const words = ["abs", "testvariable", "peopl", "apple", "test"];
// const words1 = ["abs", "testvariable", "test"];

// const res = words.find((el) => el.length === 5);
// const res1 = words1.find((el) => el.length === 5);

// console.log(res); // peopl
// console.log(res1); // undefined
//////////////////////

// includes()

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const res = arr.includes(3);
// const res1 = arr.includes(10);
// console.log(res);//true
// console.log(res1);//false

///////////////////////////
// filter() - вернет новый массив элементов согласно переданному условию

// const words = [
//   "abs",
//   "testvariable",
//   "peopl",
//   "apple",
//   "test",
//   "beer",
//   "Poland",
// ];

// const res = words.filter((el) => el.length >= 6);
// console.log(res); //[ 'testvariable', 'Poland' ]

////////////////////////////////////

//sort() - сортирует на месте - мутабельнный

// const names = ["Donald", "Alex", "alex"];
// console.log(names.sort());

//2

// const number = [1, 90, 2, 4, -1000, 56, 87];

// console.log(number.sort((a, b) => a - b));

// const users = [
//   {
//     id: 1,
//     name: "Bob",
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: "Alex",
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: "alex",
//     isStudent: true,
//   },
// ];

// console.log(users.sort((a, b) => a.name.localeCompare(b.name)));

////////////////////////////////

//toSorted() - работает только в браузере !!!!!!!!!!!!!!!!!!!!!!!!!!!1

// const months = ['Mar', 'Jan', 'Feb', 'Dec'];
// const sortedArray = months.toSorted();

// console.log('months', months);
// console.log('sortedArr', sortedArray);

// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(sortedValues);
// console.log(values);
///////////////////////////////

//map() - применяет функцию к каждому элементу

// const users1 = [
//   {
//     id: 1,
//     name: "Bob",
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: "Alex",
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: "Ann",
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: "Donald",
//     isStudent: false,
//   },
// ];

// const users = users1.map((user) => user.name);
// console.log(users);

// полифилы - метода массива map

// function newMap(arr, callback) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// }

// const resUser = newMap(users1, (user) => user.name);

// console.log(resUser);// [ 'Bob', 'Alex', 'Ann', 'Donald' ]s
