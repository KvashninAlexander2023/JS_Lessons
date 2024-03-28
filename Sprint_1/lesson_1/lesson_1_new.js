// let a = [1, 2, 3, 4, 5];

//map, filter -> new []

//мутабельно

// const users1 = {
//   //#1234-789
//   id: 1,
//   name: "Bob",
//   isStudent: true,
// };

//users1.name = "Karina";

//console.log("user1:", users1); //user1: { id: 1, name: 'Karina', isStudent: true }

//const users2 = users1; //#1234-789
//console.log("isEqual:", users2 === users1); //true

// иммутабельно ( до spread оператора)
// const users2 = {
//   //#9876-4321
//   id: users1.id,
//   name: users1.name,
//   isStudent: users1.isStudent,
// };
// console.log("isEqual:", users2 === users1);//isEqual: false

// const users1 = {
//   //#1234-789
//   id: 1,
//   name: "Bob",
//   isStudent: true,
//   country: {
//     //#00000
//     city: "Toronto",
//   },
// };

// const users2 = {
//   id: users1.id,
//   name: users1.name,
//   isStudent: users1.isStudent,
//   country: {
//     city: users1.country.city,
//   },
// };

// console.log("isEqual:", users2.country === users1.country); //isEqual: false

// spread
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
//     isStudent: true,
//   },
// ];

//иммутабельно - не изменяем исходный массив

//делаю копию

// const users2 = [...users]; //выделяет новую ссылку памяти
// console.log("users2: ", users2);

// const superUser = {
//   id: 10,
//   name: "Clementina DuBuque",
//   username: "Moriah.Stanton",
//   email: "Rey.Padberg@karina.biz",
//   address: {
//     street: "Kattie Turnpike",
//     suite: "Suite 198",
//     city: "Lebsackbury",
//     zipcode: "31428-2261",
//     geo: {
//       lat: "-38.2386",
//       lng: "57.2232",
//     },
//   },
//   phone: "024-648-3804",
//   website: "ambrose.net",
//   company: {
//     name: "Hoeger LLC",
//     catchPhrase: "Centralized empowering task-force",
//     bs: "target end-to-end models",
//   },
// };

// const newUserCopy = { ...superUser };

// newUserCopy.address.city = "London";

// console.log("superUser", superUser.address.city);
// console.log("newsuperUser", newUserCopy.address.city); //уже не копирует

// const newsuperUserCopy = {
//   ...superUser,
//   address: { ...superUser, city: "London" }, // копируем обьект и вложенность
// };
// console.log("super user: ", superUser.address.city);
// console.log("new super user: ", newsuperUserCopy.address.city);

// const newSuperUserCopy = structuredClone(superUser);
// newSuperUserCopy.address.geo.lat = "new structured clone value";
// console.log(superUser.address.geo.lat);
// console.log(newSuperUserCopy.address.geo.lat);

// деструктуризация -

// const employee = {
//   firstName: "Ivan",
//   lastName: "Ivanov",
//   middleName: "Ivanovich",
//   message: "Hello World",
//   role: "User",
//   permission: {
//     canEdit: true,
//     canDelete: false,
//   },
// };

// const firstNameValue = employee.firstName; //Ivan
// const {
//   firstName: newFirstName,
//   message,
//   role = "admin",
//   permission: { canDelete, canEdit },
// } = employee;

// console.log(firstName);
// console.log(newFirstName);
// console.log(message);
// console.log(role);
// console.log(canDelete);
// console.log(canEdit);

// const colors = ["red", "blue", "green", "white", "black"];
const colors = ["red", "blue", "green", ["yellow"], "white", "black"];

const redColor = colors[0]; // red

// const [redColorValue, secondValue] = colors; //
// const [ColorValue, , secValue] = colors; //
const [ColorValue, , secValue, [yellowValue]] = colors; //

// console.log(redColorValue);
// console.log(secondValue);

// console.log(ColorValue);
// console.log(secValue);
