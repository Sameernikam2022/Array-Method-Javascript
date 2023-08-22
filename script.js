//1.splice
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.splice(2, 1, "PineApple", "Orange");
// console.log(fruits);// ['Apple', 'Banana', 'PineApple', 'Orange']

//2.slice
// let fruits = ["Apple", "Banana", "Mango"];
// let slice = fruits.slice(1, 2);
// console.log(slice);//['Banana']

//3.concat
// let fruits1 = ["Apple", "Banana"];
// let fruits2 = ["PineApple", "Orange"];
// let allFruits = fruits1.concat(fruits2);
// console.log(allFruits);//['Apple', 'Banana', 'PineApple', 'Orange']

//4.fill
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.fill("orange");
// console.log(fruits);//['orange', 'orange', 'orange']

//5.toString
// let fruits = ["Apple", "Banana", "Mango"];
// let string = fruits.toString();
// console.log(string);//Apple,Banana,Mango

//6.join
// let fruits = ["Apple", "Banana", "Mango"];
// let join = fruits.join("  ");
// console.log(join);//Apple  Banana  Mango

//7.sort
// let fruits = ["Mango", "Apple", "Banana"];
// let sort = fruits.sort();
// console.log(sort);//['Apple', 'Banana', 'Mango']

//8.reverse
// let fruits = ["Mango", "Apple", "Banana"];
// let assending = fruits.sort();
// let desending = assending.reverse();
// console.log(desending);

//9.includes
// let fruits = ["Mango", "Apple", "Banana"];
// let available = fruits.includes("Mango");
// console.log(available);//true

//10.indexOf
// let fruits = ["Mango", "Apple", "Banana"];
// let index = fruits.indexOf("Apple");
// console.log(index);//1

//Static Array Method
//Array.from
// let fruits = Array.from("sameer");
// console.log(fruits);//['s', 'a', 'm', 'e', 'e', 'r']

//Array.of
// let fruits = Array.of("sameer", "sagar", 56);
// console.log(fruits);//['sameer', 'sagar', 56]

//Array.isArray
// let fruits = Array.isArray(["sameer"]);//true
// let fruit = Array.isArray("sameer");//false
// console.log(fruits);

//main method
//map
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = number.map((num, index) => {
//   // console.log(num);
//   return num * 2;
// });
// console.log(result);

//foreach
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = number.forEach((num, index) => {
//   console.log(num * 2);

// });

//filter
// let mobiles = [
//   {
//     mobile: "samsung",
//     price: 20000,
//     model: "A21s",
//   },
//   {
//     mobile: "oppo",
//     price: 15000,
//     model: "8t",
//   },
//   {
//     mobile: "poco",
//     price: 22000,
//     model: "A2",
//   },
//   {
//     mobile: "relme",
//     price: 10000,
//     model: "A21",
//   },
// ];

// let totalMobiles = mobiles.filter((mobile, index) => {
//   if (mobile.price <= 15000) {
//     return true;
//   }
// });
// console.log(totalMobiles);

//reduce
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let total = number.reduce((tot, num) => {
//   let result = tot + num;
//   return result;
// });
// console.log(total);

//length
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let length = number.length;
console.log(length);
