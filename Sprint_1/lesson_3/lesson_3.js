// slice - имутабельный (не меняет массив)

//массив.slice(откуда отрезать, [до куда отрезать])

//1
// let arr = ["a", "b", "c", "d", "e"];

// let sub = arr.slice(1, 3);// 3 не включается

// console.log(sub);// [ 'b', 'c' ]
// console.log(arr);// [ 'a', 'b', 'c', 'd', 'e' ]

//2

// let arr = ["a", "b", "c", "d", "e"];
// let sub = arr.slice(2)

// console.log(sub);// [ 'c', 'd', 'e' ]
// console.log(arr);// [ 'a', 'b', 'c', 'd', 'e' ]

//3

// let arr = ["a", "b", "c", "d", "e"];
// let sub = arr.slice(-2);// [ 'd', 'e' ]
// console.log(sub);

/////////////////////////////////////

// splice() - мутабельный (меняет исходный массив)
//массив.splice(откуда удалить, сколько удалить ,[вставить], [вставить]...) - вернет то что удалит!!!!!!!!!!!!!

//1

// let arr = ["a", "b", "c", "d", "e"];
// let res = arr.splice(1, 3);
// console.log(res);

//2

// let arr = ["a", "b", "c", "d", "e"];
// let res = arr.splice(1, 0, "test1", "test2");
// console.log(res);
// console.log(arr);

//3

// let arr = ["a", "b", "c", "d", "e"];
// arr.splice(1, 2, "test1", "test2");

// console.log(arr);

///////////////////////////// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// toSpliced - имутабельный (не меняет массив) работает как splice
// РАБОТАЕТ только в браузере или node v 20.11.0 и выше
// const months = ["Jan", "Mar", "Apr", "May"];
// let res = months.toSpliced(1, 0, "February");
// console.log(months);
// console.log(res);

////////////////////////////////////

// reduce() - имутабельный (не меняет массив)

//arr.reduce((acc, item, index, arr) => {}) // acc = 0
//arr.reduce((acc, item, index, arr) => {}, 1) // acc = 1

//sum

// let a = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < a.length; i++) {
//   sum += a[i];
// }
// for (let el of a) {   ///////////////////////////////////// FOR (LET EL OF A)
//   sum += el;
// }

// console.log(sum);

// let a = [1, 2, 3, 4, 5];
// let res = a.reduce((acc, el) => {
//   return acc + el;
// }, 0);
// console.log(res);

//////////////////////////////////////////
//2
// const fruits = [
//   { name: "apple", quantity: 2 },
//   { name: "banana", quantity: 3 },
//   { name: "orange", quantity: 1 },
// ];

// const res = fruits.reduce((acc, el) => {
//   console.log("acc: ", acc);
//   console.log("el: ", el);
//   return acc + el.quantity;
// }, 0);
// console.log("res: ", res);

////////////////////////////////////////////////////
//3
// const res = fruits.reduce((acc, el) => {
//   acc.push(el.name);
//   return acc;
// }, []);
// console.log("res: ", res);

////////////////////////////////////////////////////
//4

// let a = [1, 2, 3, 8, 4, 5];
// let res = a.reduce((acc, current) => {
//   console.log("acc: ", acc);
//   console.log("current: ", current);

//   return current > acc ? current : acc;
// }); // 1й элемент массива если не поставить число

// console.log("res: ", res);

////////////////////////////////////////////////////

//5
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
// ];

// const res = people.reduce(
//   (acc, people) => {
//     console.log(people);
//     acc.totalNames.push(people.name);
//     acc.totalAge += people.age;

//     return acc;
//   },
//   { totalNames: [], totalAge: 0 }
// );

// console.log("person: ",res);


// 5

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ]; // {totalNames: [...], totalAges: 0, position: index +  1}

// const res = people.reduce(
//   (acc, person, index) => {
//     console.log('person', person);
//     console.log('index', index);

//     acc.totalNames.push(person.name);
//     acc.totalAges += person.age;
//     acc.index.push(index);

//     return acc;
//   },
//   { totalNames: [], totalAges: 0, index: [] }
// );

// console.log('res: ', res); // { totalNames: [ 'Alice', 'Bob', 'Charlie' ], totalAges: 77 }

//6)

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ]; // {totalNames: [...], totalAges: 0}

// const mappedInfo = people.map((person) => ({
//   name: person.name,
//   age: person.age,
// }));// [{}]

// console.log('mappedInfo: ', mappedInfo);

// const combinedInfoMap = {
//   tottalNames: mappedInfo.map((person) => person.name),
//   totalAges: mappedInfo.reduce((acc, el) => acc + el.age, 0),
// };

// console.log('combinedInfoMap', combinedInfoMap);

//7

// const peoples = [
//   { name: 'Vika', age: 25, budget: 4500 },
//   { name: 'Nikita', age: 45, budget: 35000 },
//   { name: 'Igor', age: 55, budget: 340 },
//   { name: 'Insaf', age: 65, budget: 50000 },
//   { name: 'Alyona', age: 75, budget: 20 },
// ];

//1:  подсчитатьь бюджет Например: 1234

// const res = peoples.reduce((acc, current) => {
//   return acc + current.budget;
// }, 0);

// console.log('res', res);

//2) Expected: {totalAges: 0, totalNames: []}

// const res = peoples.reduce(
//     (acc, el) => {
//       acc.totalAges += el.age;
//       // acc.totalNames.push(el.name);
//       return { ...acc, totalNames: [...acc.totalNames, el.name] };
//     },
//     { totalAges: 0, totalNames: [] }
//   );

//   console.log('res', res);
// [] + 2

// const peoples = [
//   { name: 'Vika', age: 25, budget: 4500 },
//   { name: 'Nikita', age: 45, budget: 35000 },
//   { name: 'Igor', age: 55, budget: 340 },
//   { name: 'Insaf', age: 65, budget: 50000 },
//   { name: 'Alyona', age: 75, budget: 20 },
// ];

// let mapped = {
//   names: [],
//   ages: 0,
// };

// const mappedInfo = peoples.map((person) => {
//   mapped.names.push(person.name);
//   mapped.ages += person.age;
// });

// console.log(mapped);

///4

// const words = ['Hello', ' ', 'world', '!']; //"Hello world!"

// const res = words.reduce((acc, word) => {
//   console.log('word', word);
//   console.log('acc', acc);
//   return acc + word;
// }, '');

// console.log(res);

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ]; // [77]

// const res = people.reduce(
//   (acc, el) => {
//     console.log('el: ', el);
//     console.log('acc: ', acc);

//     acc[0] += el.age; // acc[0] = acc[0] + el.age

//     return acc;
//   },
//   [0]
// );

// console.log('res', res);

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ]; // {totalNames: []}

// const res = people.reduce(
//   (acc, el) => {
//     // console.log(acc);
//     // console.log(el);
//     acc.totalNames.push(el.name);
//     return acc;
//   },
//   { totalNames: [] }
// );

// console.log(res); // { totalNames: [ 'Alice', 'Bob', 'Charlie' ] }