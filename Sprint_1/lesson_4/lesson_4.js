// let fruit = {
//   color: "red", //статическое свойство
//   smell: "good",
// };

// динамические (вычисляемые)

// function createObj(key, value) {
//   let newObj = {};

//   newObj[key] = value;
//   return newObj;
// }

// let res = createObj("fruit", "apple");
// console.log(res); //{ fruit: 'apple' }

// function createObj2(key, value) {
//   return {
//     [key]: value,
//   };
// }

// let fruits = createObj2("fruit", "apple2");
// console.log(fruits); //{ fruit: 'apple2' }

// let obj = {
//   [выражение]:"значение" // динамические (вычисляемые)
// }

// let PROPERTY_NAME = "age";

// const obj = {
//   name: "John",
//   [PROPERTY_NAME]: 25,
// };

// console.log(obj);//{ name: 'John', age: 25 }

// 2 канкатенация строк
// const prefix = "user_";

// const person = {
//   [prefix + "id"]: "xdbb-dvxv-3453-dvx",
//   [prefix + "name"]: "Fred",
// };

// console.log(person); //{ user_id: 'xdbb-dvxv-3453-dvx', user_name: 'Fred' }

// 3 ариф.операции

// const index = 1;

// const res = {
//   [index + 4]: "four",
// };
// console.log(res);//{ '5': 'four' }

// 4

// let person = {
//   ["age" + 2]: 32,
//   [2 + 2]: 4,
// };

// console.log(person); //{ '4': 4, age2: 32 }

//5

// let result = {};

// function createObj3(key, value) {
//   return {
//     [key.toUpperCase()]: value,
//   };
// }

// const car = createObj3("bmv", "x5");
// console.log(car);//{ BMV: 'x5' }

//////////////////////////////////////////

// const STATUS_BUSY = "busy"
// const STATUS_READY = "ready"

// const STATUS_LABELS = {
//   [STATUS_BUSY]: "Ожидает",
//   [STATUS_READY]: "готово"
// }

// const driver = [{
//   name:"Tom",
//   status: "busy"
// },{
//   name: "Ben",
//   status: "ready"
// }]

// const driversStatuses = driver.map(driver => {
//   const {status} = driver;
//   return STATUS_LABELS[status]
// })
// console.log(driversStatuses); //[ 'Ожидает', 'готово' ]

///////////////////////////////////////////

// let a = null;
// console.log(typeof a)//object
