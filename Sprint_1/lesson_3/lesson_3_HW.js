//Задачи на закрепления slice:

//1) Напишите функцию, которая получает подстроку из строки, начиная с определенного индекса

// let str = "Hello, world!";
// let startIndex = 7;

// function getSubStr(str, startIndex) {
//   return str.slice(startIndex);
// }

// console.log(getSubStr(str, startIndex)); // Выведет: "world!"

//2) Напишите функцию, которая возвращает последние n элементов массива.

// function getLastElements(arr, lastIndex) {
//   return arr.slice(arr.length - lastIndex);
//   return arr.slice(-lastIndex);
// }

// console.log(getLastElements([1, 2, 3, 4, 5], 3)); // Выведет: [3, 4, 5]

//3) Создайте функцию, которая извлекает часть пути URL-адреса, начиная с указанного индекса.

// function extractPath(str, startIndex) {
// return str.slice(startIndex);
// }

// console.log(extractPath("https://example.com/blog/article", 19)); // Выведет: "/blog/article"

/////////////////////////////////////////////////////////

// Задачи на splice:

// 1) Напишите функцию, которая принимает массив и индекс элемента для удаления, а затем удаляет этот элемент из массива, модифицируя его

// function removeElement(arr, number) {
//   arr.splice(number, 1);
//   return arr;
// }

// let numbers = [1, 2, 3, 4, 5];

// console.log(removeElement(numbers, 2)); // Выведет: [1, 2, 4, 5]

//2) Создайте функцию, которая принимает массив, индекс и новый элемент, а затем вставляет новый элемент в указанную позицию массива

// function insertElement(arr, number, newElement) {
//   arr.splice(number, 0, newElement);
//   return arr;
// }

// let numbers = [1, 2, 4, 5];
// console.log(insertElement(numbers, 2, 3)); // Выведет: [1, 2, 3, 4, 5]

/////////////////////////////////////////////////////////

// Задачи на reduce:

//1 Напишите функцию, которая принимает массив чисел и использует метод reduce, чтобы вернуть сумму всех элементов в массиве

// function sumArray(arr) {
//   return arr.reduce((acc, item) => {
//     return acc + item;
//   });
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers)); // Выведет: 15

//2 Создайте функцию, которая принимает массив строк и возвращает сумму их длин, используя метод reduce

// function sumStringLengths(arr) {
//   return arr.reduce((acc, item) => {
//     return acc + item.length;
//   }, 0);
// }

// console.log(sumStringLengths(["apple", "banana", "cherry"])); // Выведет: 17

//3   Напишите функцию, которая принимает массив, содержащий вложенные массивы чисел, и возвращает сумму всех чисел в этих массивах

// function sumNestedArrays(arr) {
//   return arr.flat(Infinity).reduce((acc, item) => {
//     return acc + item;
//   }, 0);
// }

// Второе решение
// function sumNestedArrays(arr) {
//   return arr.reduce((total, nestedArray) => {
//     return total + nestedArray.reduce((acc, num) => acc + num, 0);
//   }, 0);
//  }

// console.log(
//   sumNestedArrays([
//     [1, 2],
//     [3, 4, 5],
//     [6, 7, 8, 9],
//   ])
// ); // Выведет: 45

//4 Создайте функцию, которая принимает массив элементов и возвращает новый массив, содержащий только уникальные элементы, используя метод reduce.

// function removeDuplicates(arr) {
//   return arr.reduce((acc, item) => {
//     if (!acc.includes(item)) {
//       acc.push(item);
//     }

//     return acc;
//   }, []);
// }

// const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
// console.log(removeDuplicates(numbers)); // Выведет: [1, 2, 3, 4, 5, 6]

// 5  Найдите дубликаты в массиве с помощью метода reduce и верните массив дублированных элементов

// function findDuplicates(arr) {
//   newArr = [];
//   arr.reduce((acc, item) => {
//     if (!acc.includes(item)) {
//       acc.push(item);
//     } else {
//       newArr.push(item);
//     }

//     return acc;
//   }, []);
//   return newArr;
// }

// function findDuplicates(arr) {
//   return arr.reduce((duplicates, item, index) => {
//     if (
//       arr.indexOf(item, index + 1) !== -1 &&
//       duplicates.indexOf(item) === -1
//     ) {
//       duplicates.push(item);
//     }
//     return duplicates;
//   }, []);
// }

// const array = [1, 2, 3, 2, 4, 5, 4, 5];

// let start = performance.now();

// findDuplicates(array);
// findDuplicates(array);
// findDuplicates(array);
// findDuplicates(array);
// findDuplicates(array);

// let end = performance.now();

// let time = end - start;

// console.log("Время выполнения = " + time);

// const duplicatesArray = findDuplicates(array);
// console.log(duplicatesArray); // Output: [2, 4, 5]

//6  Напишите функцию, которая принимает массив строк и возвращает объект, в котором ключи - это уникальные строки, а значения - количество их вхождений в массив

// function wordCount(arr) {
//   return arr.reduce((acc, item) => {
//     if (acc[item]) {
//       acc[item] += 1;
//     } else {
//       acc[item] = 1;
//     }

//     return acc;
//   }, {});
// }

// решение 2
// const wordCount = words.reduce((acc, word) => {
//   acc[word] = (acc[word] || 0) + 1;
//   return acc;
//  }, {});
 

// const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];

// console.log(wordCount(words)); // Output: { apple: 3, banana: 2, cherry: 1 }

//7 Создайте функцию, которая принимает массив объектов и возвращает массив значений определенного свойства объектов

// function getPropertyValues(arr, value) {
//   return arr.reduce((acc, item) => {
//     acc.push(item[value]);

//     return acc;
//   }, []);
// }

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
// ];

// const names = getPropertyValues(people, "name");
// console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
