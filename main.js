// VERY EASY

// -----N1----

// console.log("HELLO WORLD");

// let a=20;
// if(a%2==0){
//     console.log("cut ededir")
// }
//     else{
//         console.log("tek ededdir")
//     }

//----N2---

// function myfunction(a,b){
//     return a*b
// }
// console.log(myfunction(12,6))

//----N3-----

// let a=prompt("dogum ilinizi daxil edin");

// let b=2023-Number(a);
// console.log("yasiniz"+" "+ b)

//-----N4----

// let a=prompt("1-ci ededi daxil edin");
// let b=prompt("2-ci ededi daxil edin");
// if(a%b==3){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

//---N5---

// a=prompt("ededi daxil edin")
// let sum=0;
// let arr=[];
// for(let i=0; i<a.length; i++){
//    sum=sum +a%10;
//  a=a||10;
// }
// console.log(sum)

//----N6-----

// Ucbucagin hasili

// function areaTriangle(a,b){
//   return (a*b)/2;
// }
// console.log("Ucbucagin sahesi "+ areaTriangle(5,6));

//----N7---

// Yasadigi gun

// a=prompt("Yasinizi daxil edin:");

// let days=a*365;

// console.log(days);

//---N8---

// duzbucaqlinin perimetri

// a=prompt("Duzbucaqlinin enini daxil edin::");
// b=prompt("Duzbuucaqlinin uzunlugunu daxil edin:");

// let perimeter=2*a+2*b;
// console.log(perimeter);

// Massivin 1-ci elementi

// let arr=[1,2,3,4,5,6,7]

// console.log(arr[0]);

///----N9----

// verilen melumatin qabagina something elave eleyir

// let a="Something"

// console.log(a+" "+ "Bob Jone")

//----N10----

// sum of polyglon ages

// function myFunction(n){
//   return (n-2)*180;
// }

// console.log(myFunction(6));

//----N11----

// les than 100

//  let a=Number(prompt("1-ci eded"));
// let b=Number(prompt("2-ci eded"));

// if((a+b)<=100){
//   console.log(true);
// }
// else{

// console.log(false);

// }

//----N12---

// 1-den n ededine qeder elemetlerden ibaret massiv yarat

// let arr=[];
// function createArray(n){
//   for(let i=1; i<=n; i++){
//     arr.push(i);
//   }
// return arr;
// }
// console.log(createArray(6));

//-----N14----

// swap

// let arr=[];
// function swap(a,b){
// arr[0]=b;
// arr[1]=a;
// return arr;
// }
// console.log(swap(10,20));

// EASY

//-----N15----

// 1-den verilmis edede qeder olan ededlerin cemi

// let sum=0;

// function myFunction(n){
//   for(i=1; i<=n; i++){
// sum+=i;
//   }
//   return sum;
// }

// console.log(myFunction(4));

//----N16----

// Left Shift by Powers of Two

// let product=1;
// function shifttoLeft(a,b){
// for(let i=1;i<=b;i++){
// product=product*2;
// }

// return a*product;
// }

// console.log(shifttoLeft(5,3));

//----N17----

// Find the Smallest and Biggest Numbers
// let arr=[1,2,3,4,5,6,7,8];
// let min=arr[0];
// let max=arr[1];
// let i=0;
// let minmax=[];

// function myArray([]){
//     for(i=0; i<arr.length;i++){
//         if (arr[i]<min){
//             min=arr[i];

//         }

//     }
//       minmax.push(min);

//     for(i=0; i<arr.length;i++){
//          if (arr[i]>max){
//             max=arr[i];
//         }

//     }
//      minmax.push(max);

//      return minmax;
// }

// console.log(myArray([]));

// ---N19----

// Is it Time for Milk and Cookies?

// let dateSanta={
//     year:2013, month:10, day:24,
// };

// function myFunction(){
//     if(dateSanta.month==11 && dateSanta.day==24){
//     console.log( true);     }
//    else {
//        console.log(false);
//     }
// }

//  console.log(myFunction());

//---N20--

// Check if One Array can be Nested in Another

// function canNest(arr1,arr2){
//     let minone=Math.min(...arr1);
//     let maxone=Math.max(...arr1);
//     let mintwo=Math.min(...arr2);
//     let maxtwo=Math.max(...arr2);
//     if((minone>mintwo) && (maxone<maxtwo)){
//         return true;

//     }
//     else {
//         return false;
//     }

// }
// console.log(canNest([-2,1,2,3,4,5,6],[-3,1,2,3,4,5,7]));

//---N21-----
// Number of Squares in an N * N Grid
// let sum=0;
// function numberSquares(n){
//     for(let i=0;i<=n;i++){
//         sum=sum+i*i;
//     }
// return sum;
// }
// console.log(numberSquares(5));

//---N21----
// Largest Swap
// let n;

// function largestSwap(n){
//     if(n[0] >= n[1]){
//         return true;
//     }
//     else {
//        return false;
//     }
// }
// console.log(largestSwap(76));
// let n;

// function noBoringZeros(n) {
//     let a=String(n).split('')

//     for(let i=a.length-1; i>=0;i--){
//         if(a[i]==0  ){
//         a.pop()
//         }
//        else{
//         break;
//        }
//     }
//     return +a.join('');
//   }
//   console.log(noBoringZeros(1050));

// function sumMul(n, m) {
//   let sum = 0;
//   if (m <= 0) {
//     return "INVALID";
//   } else {
//     for (let i = n; i <= m; i = i + n) {
//       sum = sum + i;
//     }
//   }
//   return sum;
// }
// console.log(sumMul(2, -1));

// function reemoveArrayZeros(arr) {
//   let zeros = arr.filter((num) => num === 0);
//   let numbers = arr.filter((num) => num !== 0);
//   return [...numbers, ...zeros];
// }

// console.log(reemoveArrayZeros([1, 3, 0, 0, 5, 7]));

// const reemoveArrayZeros = (arr) => [
//   ...arr.filter((num) => num !== 0),
//   ...arr.filter((num) => num === 0),
// ];

// console.log(reemoveArrayZeros([1, 3, 0, 0, 5, 7]));

// function findAverage(array) {
//   let sum = 0;
//   if (array.length == 0) {
//     return 0;
//   } else {
//     for (i = 0; i < array.length; i++) {
//       sum = sum + array[i];
//     }
//     let average = sum / array.length;
//     return average;
//   }
// }
// console.log(findAverage([1, 2, 3, 4]));

// function findMultiples(integer, limit) {
//   let array = [];
//   for (i = integer; i <= limit; i += integer) {
//     array.push(i);
//   }
//   return array;
// }
// console.log(findMultiples(11, 15));

// function peopleWithAgeDrink(old) {
//   if (old < 14) {
//     return "drink toddy";
//   } else if (old >= 14 && old < 18) {
//     return "drink coke";
//   } else if (old >= 18 && old < 21) {
//     return "drink beer";
//   } else if (old >= 21) {
//     return "drink whisky";
//   } else {
//     return "INVALID";
//   }
// }
// console.log(peopleWithAgeDrink(30));

// function fakeBin(x) {
//   let a = String(x).split("");
//   for (i = 0; i < a.length; i++) {
//     if (a[i] <= 4) {
//       a[i] = 0;
//     } else if (a[i] > 4) {
//       a[i] = 1;
//     }
//   }
//   return a.join("");
// }

// console.log(fakeBin(1234567898765432));

// function hero(bullets, dragons) {
//   if (bullets / dragons >= 2) {
//     return true;
//   } else if (bullets == 0 && dragons == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(hero(100, 40));

// function seatsInTheater(nCols, nRows, col, row) {
//   let a = (nCols - col + 1) * (nRows - row);
//   return a;
// }
// console.log(seatsInTheater(16, 11, 5, 3));

// function tripleTrouble(one, two, three) {
//   let arr = [];
//   let arr1 = one.split("");
//   let arr2 = two.split("");
//   let arr3 = three.split("");
//   for (i = 0; i < arr1.length; i++) {
//     arr.push(arr1[i], arr2[i], arr3[i]);
//   }
//   return arr.join("");
// }

// console.log(tripleTrouble("aa", "bb", "cc"));

// function pipeFix(numbers) {
//   let arr = [];
//   for (i = 1; i <= numbers[numbers.length - 1]; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(pipeFix([1, 2, 5, 7, 9, 10]));

// function sayHello(name) {
//   return "Hello" + name;
// }

// function isPalindrome(x) {
//   let arr1 = x.split("");
//   let arr2 = [];
//   for (let i = arr1.length - 1; i > -1; i--) {
//     arr2.push(arr1[i]);
//   }

//   let y = arr2.join("");
//   if (x.toLowerCase() == y.toLowerCase()) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPalindrome("Madam"));

// function stringToArray(string) {
//   let arr1 = [];
// }
// console.log(stringToArray("nadir bagirov"));

// function makeUpperCase(str) {
//   return str.toUpperCase();
// }

// SEHV VAR
// function findNeedle(haystack) {
//   let sum = 0;
//   let k = 0;
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] == "needle") {
//       sum = sum + 1;
//       k = i;
//     }
//   }
//   if (sum >= 1) {
//     console.log("found the needle at position", k);
//   } else {
//     return "Your function didn't return anything";
//   }
// }
// console.log(findNeedle(["assd", "fbb", 1, true]));

// function between(a, b) {
//   let arr = [];
//   for (let i = a; i <= b; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// console.log(between(5, 11));

// function smash(words) {
//   return words.join(" ");
// }

// console.log(smash(["hello", "world", "this", "is", "great"]));

// function squareDigits(num) {
//   let arr1 = num.split("");
//   let arr2 = [];
//   for (let i = 0; i < arr1.length; i++) {
//     arr2.push(arr1[i] * arr1[i]);
//   }
//   return arr2.join("");
// }
// console.log(squareDigits(1234));

// function smaller(nums) {
//   let k = 0;
//   let b = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         k += 1;
//       }
//     }
//     b.push(k);
//     k = 0;
//   }
//   return b;
// }
// console.log(smaller([5, 4, 3, 2, 1]));

// function isLeapYear(year) {
//   if (year % 100 == 0 && year % 400 == 0) {
//     return true;
//   } else if (year % 100 == 0) {
//     return false;
//   } else if (year % 4 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isLeapYear(2000));

// function findNextSquare(sq) {
//   let k = Math.sqrt(sq);
//   if (Number.isInteger(k)) {
//     return Math.pow(k + 1, 2);
//   } else {
//     return -1;
//   }
// }

// var number = function (busStops) {
//   let sum1 = 0;
//   let sum2 = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     sum1 += busStops[i][0];
//     sum2 += busStops[i][1];
//   }
//   return sum1 - sum2;
// };

//
// function binaryPyramid(m, n) {
//   let sum = 0;
//   let x = m.toString(2).split("");
//   let y = m.toString(2).split("");

//   for (let i = 0; i < x.length; i++) {
//     sum += x[i];
//   }
//   for (let j = 0; j < y.length; j++) {
//     sum += y[j];
//   }
//   return sum.toString(2);
// }

// function sumDigits(number) {
//   let sum = 0;
//   let x = number.toString().split("").map(Number);
//   if (number < 0) {
//     for (let i = 1; i < x.length; i++) {
//       sum = sum + x[i];
//     }
//   } else {
//     for (let i = 0; i < x.length; i++) {
//       sum = sum + x[i];
//     }
//   }
//   return sum;
// }

// let number = -25;

// console.log(sumDigits(-25));

// function isIsogram(str) {
//   let k = str.toLowerCase();
//   let x = k.split("");
//   let sum = 0;
//   for (let i = 0; i < x.length; i++) {
//     for (let j = i + 1; j < x.length; j++) {
//       if (x[i] == x[j]) {
//         sum += 1;
//       }
//     }
//   }
//   if (sum >= 1) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(isIsogram("abcdefg"));

//SEHV
// function dominator(arr) {
//   let sum = 1;
//   let k = -1;

//   for (let i = 0; i < arr.length; i++) {
//     for(let j=i+1;j<length;j++){

//     }

//     }
//   }
//   if (sum > t / 2) {
//     k = arr[i];
//   } else {
//     k = -1;
//   }
//   return k;
// }
// console.log(dominator([3, 2, 4, 2, 4]));

// var searchArray = function (arrayToSearch, query) {
//   let k = -1;
//   if (query.length!=2 || ) {
//     console.log("error");
//   } else {
//     for (let i = 0; i < arrayToSearch.length; i++) {
//       if (arrayToSearch[i][0] == query[0] && arrayToSearch[i][1] == query[1]) {
//         k = arrayToSearch.indexOf(arrayToSearch[i], 0);
//         break;
//       }
//     }
//     return k;
//   }
// };
// console.log(
//   searchArray(
//     [
//       [1, 2],
//       [2, 3],
//       [3, 4],
//       [6, 7],
//     ],
//     [3, 4]
//   )
// );

// function minimumPerimeter(area) {
//   if (area >= 1 && area <= 5 * Math.pow(10, 10)) {
//     let arr = [];
//     for (let i = 1; i <= area; i++) {
//       if (area % i == 0) {
//         arr.push(2 * (i + area / i));
//       }
//     }
//     let k = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < k) {
//         k = arr[i];
//       }
//     }
//     return k;
//   } else {
//     return "false";
//   }
// }

// console.log(minimumPerimeter(45));

// let firstName = ["Asif", "Vasif", "Akif"];

// let surName = ["Aliyev", "Rzayev", "Mamedov"];
// let nameSurname = firstName.map((name, index) => `${name} ${surName[index]}`);

// console.log(nameSurname);

// function findEvenIndex(arr) {
//   let sum = 0;
//   let sum2 = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   for (let j = 0; j < arr.length; j++) {
//     sum -= arr[j];
//     if (sum2 == sum) {
//       return j;
//     }

//     sum2 += arr[j];

//     if (sum2 > sum) {
//       break;
//     }
//   }
//   return -1;
// }
// console.log(findEvenIndex([2, 1, 3, 1, 3, 5, 2]));

// function findEvenIndex(arr) {
//   if (arr.reduce((a, b) => (a += +b), 0) == 0) {
//     return 0;
//   }
//   let centeredItemIndex = Math.floor(arr.length / 2);
//   let newArray1Sum = arr
//     .slice(0, centeredItemIndex)
//     .reduce((a, b) => (a += +b), 0);
//   let newArray2Sum = arr
//     .slice(centeredItemIndex + 1)
//     .reduce((a, b) => (a += +b), 0);

//   return newArray1Sum == newArray2Sum ? centeredItemIndex : -1;
// }

// console.log(findEvenIndex(1, 100, 50, -51, 1, 1));

// function digitalRoot(n) {
//   let x = n.toString().split("").map(Number);
//   let sum = 0;
//   for (let i = 0; i < x.length; i++) {
//     sum += x[i];
//   }
//   if (sum >= 10) {
//     return digitalRoot(sum);
//   } else {
//     return sum;
//   }
// }
// console.log(digitalRoot(193));

// function minRemove(arr) {
//   let x = Math.min(...arr);
//   let y = Math.max(...arr);
//   let k = 0;
//   if (Math.sqrt(y) <= x) {
//     return k;
//   } else {
//     const index = arr.indexOf(x);
//     if (index !== -1) {
//       arr.splice(index, 1);
//       k += 1;
//     }

//     minRemove(arr);
//   }

//   return k;
// }

// function minRemove(arr) {
//   arr.sort((a, b) => a - b);
//   let left, right, mid;
//   let result = arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     left = i;
//     right = arr.length - 1;
//     while (left <= right) {
//       mid = Math.floor((left + right) / 2);
//       if (Math.sqrt(arr[mid]) > arr[i]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     }
//     result = Math.min(result, i + arr.length - 1 - right);
//   }
//   return result;
// }

// console.log(minRemove([9, 13, 21, 1, 3, 5, 7]));
// console.log(minRemove([9, 13, 21, 1, 3, 3, 7]));
// console.log(minRemove([6, 25, 35, 38]));
// console.log(minRemove([1, 3, 1, 2, 2, 5, 5, 5, 2, 2]));
// console.log(
//   minRemove([1, 3, 1, 1, 3, 3, 5, 5, 1, 2, 2, 1, 2, 2, 5, 5, 5, 2, 2])
// );

// // [,2],
// // [,3],
// // ,1],
// // [,5],
// // [,10]

// const binaryArrayToNumber = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     sum += arr[i] * 2 ** (arr.length - 1 - i);
//     return sum;
//   }
// };

// I TASK
// function myfunction(string) {
//   let x = string.split("");
//   return x.indexOf(".");
// }
// console.log(myfunction("SALAM AZER.BAYCAN"));

// II TASK

// function myfunction(a) {
//   if (typeof a == "string") {
//     let x = a.split("").reverse().join("");
//     return x;
//   } else {
//     console.log("Mətn daxil edin");
//   }
// }

// console.log(myfunction(5));

//III TASK

// let groupmates = [];
// groupmates = ["Azer", "Aydan", " Aqil"];
// console.log(groupmates);
// groupmates.pop();
// console.log(groupmates);
// groupmates.shift();
// console.log(groupmates);

//IV TASK
// function myfunction(string) {
//   let x = string.split("");
//   for (let i = 0; i < x.length - 1; i++) {
//     if (x[i] == ",") {
//       x[i] = ";";
//     }
//   }
//   return x.join("");
// }
// console.log(myfunction("32, 31, 34, 36, 31"));

// V TASK
// let stockItem = {
//   id: 17,
//   ad: "lorem",
//   miqdar: "35",
// };
// const shopItem = { ...stockItem, price: "40" };
// console.log(shopItem);

//VI TASK

//  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let [b, c, d, ...e] = arr;

// console.log(b, c, d, e);

//VII TASK
// function myfunction(arr) {
//   let x = Math.max(...arr);

//   return x;
// }

// console.log(myfunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//VIII TASK
// function myfunction(arr) {
//   arr = [1, 2, 3, 4, 5];

//   let arr2 = [...arr];

//   for (let i = 0; i < arr.length; i++) {
//     arr2[i] = 2 * arr2[i];
//   }

//   console.log(arr);
//   return arr2;
// }
// console.log(myfunction([1, 2, 3, 4, 5]));

//IX TASK
// let people = [
//   ["Jaylee Macy", "marketing"],
//   ["John Smith", "management"],
//   ["Blossom Hartley", "design"],
//   ["Austin Carpenter", "marketing"],
//   ["Joan Knowles", "development"],
//   ["Sally Nunez", "management"],
//   ["Laurel Ward", "development"],
//   ["Lark Simon", "marketing"],
//   ["Jane Stone", "management"],
//   ["Courtney Olson", "development"],
// ];

// const developmentPeople = people.reduce(function (filteredPeople, person) {
//   if (person[1] === "development") {
//     filteredPeople.push(person[0]);
//   }
//   return filteredPeople;
// }, []);

// console.log(developmentPeople);

//X TASK
// function myfunction(arr) {
//   let sortarray = arr.sort(function (a, b) {
//     return a - b;
//   });

//   return sortarray;
// }

// console.log(myfunction([-3, -4, 2, 1, 3, 4]));

//XI TASK
// function myfunction(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }

// console.log(myfunction([-3, -2, 4, 5, -5, 7, -5]));

//XII TASK
// function myfunction(string) {
//   let x = string.indexOf("-");
//   return string.replace("-", "_").toUpperCase();
// }
// console.log(myfunction("Kebab-case"));

//XIII TASK
// function myfunction(arr) {
//   let x = arr.toString().split("");
//   let y = x[0] + x[1] + x[2];
//   return y;
// }

// console.log(myfunction(["aaabbb", "ccccddeee"]));

// function myfunction(arr) {
//   arr.sort(function (a, b) {
//     return b - a;
//   });
//   return arr;
// }

// console.log(myfunction([1, 3, 4, 5, 6, 7, 8, 2, 4]));
