//? object destructuring

// const person = {
//   // name: 'John',
//   age: 34,
//   location: {
//     city: 'Berlin',
//     temp: 92,
//   },
// };
// const { name = 'Syed', age } = person;
// console.log(`${name} is ${age} years old.`);

// const { city, temp: temperature } = person.location;
// console.log(city);

// if (city && temperature) {
//   console.log(`its ${temperature} in ${city} `);
// }

//! Task

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// ! Array destructuring

// const address = ['Ahlener weg', 'Berlin', 'Germany', '12207'];

// const [, city = 'Sargodha', country, zip] = address;
// console.log(`You are in ${city}`);

const items = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [type = 'Cold Coffee', , medium, ] = items;

console.log(`A medium ${type} costs ${medium}`);
