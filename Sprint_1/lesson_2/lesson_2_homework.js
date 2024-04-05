/////////////////////////////////////
// 1 push()

// let fruits = ["apple", "banana", "orange"];

// fruits.push("kokos", "oreh");

// console.log(fruits); // Output: ['apple', 'banana', 'orange', твои добавленные элементы в конец]

/////////////////////////////////////
//2 pop()

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
//     name: "Ann",
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: "Donald",
//     isStudent: false,
//   },
// ];

// let lastUser = users.pop();

// console.log(lastUser); // { id: 4, name: 'Donald', isStudent: false }

/////////////////////////////////////
//3 shift()

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
//     name: "Ann",
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: "Donald",
//     isStudent: false,
//   },
// ];

// let firstUser = users.shift();

// console.log(firstUser); // { id: 1, name: 'Bob', isStudent: true }
// console.log(users); // [{ id: 2, name: 'Alex', isStudent: true },  { id: 3, name: 'Ann', isStudent: true },  { id: 4, name: 'Donald', isStudent: false }]

/////////////////////////////////////
//4 reverse(), join(), split()
// const str = "JavaScript is awesome";

// const res = str.split(" ").reverse().join(" ");

// console.log(res); // awesome is JavaScript

/////////////////////////////////////
//5 concat()

//Напишите функцию mergeArrays, которая принимает на вход два массива и возвращает новый массив, содержащий все элементы из обоих массивов.

// function mergeArrays(arr1, arr2) {
//   return arr1.concat(arr2);
// }

// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(mergeArrays(["apple", "banana"], ["orange", "kiwi"])); // Output: ["apple", "banana", "orange", "kiwi"]

/////////////////////////////////////
//6 flat()
//Напишите функцию JavaScript, которая сглаживает вложенный массив любой глубины

// function flattenArray(arr) {
//   return arr.flat(Infinity);
// }

// console.log(flattenArray([1, [2, 3], [[4], [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]

/////////////////////////////////////
//7 forEach()

// function calculateSquare(arr) {
//   return arr.forEach((el) => {
//     console.log(`${el} squared is ${el * el}`);
//   });
// }

//Напишите функцию calculateSquare, которая принимает на вход массив чисел и выводит квадрат каждого элемента в массиве.

// calculateSquare([1, 2, 3, 4, 5]);
// 1 squared is 1
// 2 squared is 4
// 3 squared is 9
// 4 squared is 16
// 5 squared is 25

/////////////////////////////////////
//8 find():

// function findFirstElement(arr, fun) {
//   return arr.find(fun);
// }

// console.log(findFirstElement([10, 20, 30, 40, 50], (el) => el > 25));
// console.log(
//   findFirstElement(
//     ["яблоко", "банан", "апельсин", "киви"], ///(fruit) => fruit.startsWith('o')
//     (el) => el[0] === "а"
//   )
// );
// Входной массив: [10, 20, 30, 40, 50]
// Условие: Найти первый элемент больше 25
// Выходные данные: 30

// Входной массив: ["яблоко", "банан", "апельсин", "киви"].
// Условие: Найти первый элемент, начинающийся на "o".
// Выходные данные: "апельсин"

// Необходимо написать функцию findFirstElement, которая принимает на вход массив и функцию условия и возвращает первый элемент в массиве, удовлетворяющий условию.

/////////////////////////////////////
//9 includes()

// Напишите функцию JavaScript, которая проверяет, присутствует ли заданный элемент в массиве.

// Пример:

// Входной массив: [1, 2, 3, 4, 5]
// Элемент для проверки: 3
// Выход: true

// Входной массив: ["яблоко", "банан", "апельсин", "киви"].
// Элемент для проверки: "виноград"
// Выход: false

// Необходимо написать функцию checkElement, которая принимает на вход массив и элемент и возвращает true, если элемент присутствует в массиве, и false в противном случае

// function checkElement(arr, el) {
//   return arr.includes(el);
// }

// let numbers = [1, 2, 3, 4, 5];
// let fruits = ["apple", "banana", "orange", "kiwi"];

// console.log(checkElement(numbers, 3)); // Output: true
// console.log(checkElement(fruits, "grape")); // Output: false

/////////////////////////////////////
//10 filter()

// Напишите функцию JavaScript, которая фильтрует массив чисел и возвращает только те элементы, которые больше заданного значения.

// Пример:

// Входной массив: [10, 20, 30, 40, 50]
// Значение для фильтрации: 25
// Выходной массив: [30, 40, 50]

// Входной массив: [5, 15, 25, 35, 45]
// Значение для фильтрации: 20
// Выходные данные: [25, 35, 45]

// Необходимо написать функцию filterGreaterThan, которая принимает на вход массив чисел и значение и возвращает новый массив, содержащий только элементы, превышающие указанное значение.

// function filterGreaterThan(arr, num) {
//   return arr.filter((el) => el > num);
// }

// let numbers1 = [10, 20, 30, 40, 50];
// let numbers2 = [5, 15, 25, 35, 45];

// console.log(filterGreaterThan(numbers1, 25)); // Output: [30, 40, 50]
// console.log(filterGreaterThan(numbers2, 20)); // Output: [25, 35, 45]

/////////////////////////////////////
//11 sort():

// Напишите функцию JavaScript, которая сортирует массив объектов в алфавитном порядке на основе заданного свойства.

// let people = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
// ];

// function sortAlphabeticallyByProperty(arr, value) {
//   return arr.sort((a, b) => a[value].localeCompare(b[value]));
// }

// console.log(sortAlphabeticallyByProperty(people, "name")); // [ { name: 'Alice', age: 25 },{ name: 'Bob', age: 35 },{ name: 'John', age: 30 }]

// Напишите функцию JavaScript, которая сортирует массив чисел в порядке убывания

// let numbers = [5, 2, 8, 1, 4];

// function sortDescending(arr) {
//   return arr.sort((a, b) => b - a);
// }
// console.log(sortDescending(numbers)); // Output: [8, 5, 4, 2, 1]

/////////////////////////////////////
//12 map()

//Отформатируйте data в массив объектов с такими вот св-ми

// [
//  { value: 1, label: 'Option 1' },
//  { value: 2, label: 'Option 2' },
//  { value: 3, label: 'Option 3' }
// ]

// let data = [
//   { value: 1, name: "Option 1" },
//   { value: 2, name: "Option 2" },
//   { value: 3, name: "Option 3" },
// ];

// const formattedData = data.map((el) => {
//   let { value, name: label } = el;
//   return { value, label };
// });

// console.log(formattedData); // [
//   { value: 1, label: 'Option 1' },
// { value: 2, label: 'Option 2' },
// { value: 3, label: 'Option 3' }
// ]

// У вас есть массив объектов, и вы хотите добавить к каждому объекту новое свойство на основе существующих данных. Этим свойством будет discountPrice, где значение будет вычисляться таким образом price * 0.9

// let products = [
//   { id: 1, name: "Apple", price: 1.99 },
//   { id: 2, name: "Banana", price: 0.99 },
//   { id: 3, name: "Orange", price: 2.49 },
// ];

// const productsWithDiscount = products.map((el) => {
//   let discountPrice = el.price * 0.9;
//   // let { id, name, price } = el;
//   return { ...el, discountPrice };
// });

// console.log(productsWithDiscount); // [
//   { id: 1, name: 'Apple', price: 1.99, с: 1.791 },
//   { id: 2, name: 'Banana', price: 0.99, discountedPrice: 0.891 },
//   { id: 3, name: 'Orange', price: 2.49, discountedPrice: 2.241 }
// ]
