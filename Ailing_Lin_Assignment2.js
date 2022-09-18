/*

Question 1


*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

//Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
let doubleArr = itemsObject.map((item) => {
  return (properties = {
    quantity: item.quantity * 2,
    price: item.price * 2,
  });
});
console.log(doubleArr);

//Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
let selectedArr = itemsObject.filter(
  (item) => item.quantity > 2 && item.price > 300
);
console.log(selectedArr);

//Given the array, implement a function to calculate the total value of the items.
let totalSum = 0;
itemsObject.forEach((item) => {
  totalSum += item.price * item.quantity;
});
console.log("\nThe total value of items are: " + totalSum);

/*

Question 2

Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.

*/

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

const replaced = string
  .replace(/[^a-z0-9]/gi, " ")
  .replace(/\s+/g, " ")
  .trim()
  .toLowerCase();

console.log("\n" + replaced);
//console.log(replaced === expectedReturnString);

/*

Question 3

Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.

*/

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

//填空
let arr1 = first.map((item) => {
  let properties = {
    uuid: item.uuid,
    role: null,
    name: item.name,
  };
  return properties;
});

let arr2 = second.map((item) => {
  let properties = {
    uuid: item.uuid,
    role: item.role,
    name: null,
  };
  return properties;
});

//合并
arr2.forEach((item) => {
  var f = arr1.find(function (i) {
    return item.uuid === i.uuid;
  });
  if (f) {
    f.role = item.role;
  } else {
    arr1.push(item);
  }
});

//sort
arr1.sort(function (a, b) {
  return a.uuid - b.uuid;
});

console.log(arr1);
