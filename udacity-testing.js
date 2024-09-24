// // Function expression that assigns the function displayFavorite 
// // to the variable favoriteMovie
// const favoriteMovie = function displayFavorite(movieName) {
//     console.log("My favorite movie is " + movieName);
// };

// // Function declaration that has two parameters: a function for displaying
// // a message, along with a name of a movie
// function movies(messageFunction, name) {
//     messageFunction(name);
// }

// // Call the movies function, pass in the favoriteMovie function and name of movie
// movies(favoriteMovie, "Finding Nemo");

/********************************************************************************************************************************************/
// // function declaration that takes in two arguments: a function for displaying
// // a message, along with a name of a movie
// function movies(messageFunction, name) {
//     messageFunction(name);
//   }
  
//   // call the movies function, pass in the function and name of movie
//   movies(function displayFavorite(movieName) {
//     console.log("My favorite movie is " + movieName);
//   }, "Finding Nemo");

/********************************************************************************************************************************************/
// const laugh = function(num){
//     let string="";
//     for(let i=0; i<num; i++){
//         string+="ha"
//     }
//     return string + "!";
// }
// console.log(laugh(0));

/********************************************************************************************************************************************/
// const cry = function crying(){
//     return "boohoo!";
// }
// console.log(cry());

/********************************************************************************************************************************************/
// let num = 3;
// function emotions(myString, myFunc) {
//     console.log("I am " + myString + ", " + myFunc(num));
// }
// emotions("happy", function(num){
//     let laughing = "";
//     for (let i=0; i<num; i++){
//        laughing +="ha";
//     }
//     return laughing + "!";
// });

/********************************************************************************************************************************************/
// const myArray = ["A", "B", "C", "D"];

// function myAwesomeFunction(element, index, array) {
//   console.log("Element: ", element);
//   console.log("Index: ", index);
//   console.log("Array: ", array);
// }

// myArray.forEach(myAwesomeFunction);

/********************************************************************************************************************************************/
// const donuts = ["Jelly", "Cream", "Sugar Powder"];

// donuts.forEach(function(donut){
// donut+=" Donut";
// donut = donut.toUpperCase();
// console.log(donut);
// })

/********************************************************************************************************************************************/
// The function that you pass to the forEach() method can take up to three parameters. We have named them element, index, and array, but you can name them whatever you like.
// The forEach() method will call this function once for each element in the array (hence the name forEach.) Each time, it will call the function with different arguments. The element parameter will get the value of the array element. The index parameter will get the index of the element (starting with zero). The array parameter will get a reference to the whole array, which is handy if you want to modify the elements.
// const words=["cat", "dog", "rabbit", "chickadee"];

// words.forEach(function(word, index, array){
//     console.log(word.toUpperCase(), "- word in the array");
//     console.log(index, "- index of the word in the array");
//     console.log(array, "- shows the whole array an item is located in");
// })

// const numbers=[1,2,3,4,5,6,7,8,9];
// console.log("This array will be formatted into a string format - ", numbers.toString());
/********************************************************************************************************************************************/
// const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
// const newArray=[];
// test.forEach(function(number){
//     if(number%3===0){
//         number+=100;
//         newArray.push(number);
//     }
//     else{
//         newArray.push(number);
//     }
// })
// console.log(newArray);

//another solution
// test.forEach(function(number, index){
//     if(number%3===0){
//         test[index] = test[index]+100;
//     }
// })
// console.log(test);
/********************************************************************************************************************************************/
// const students = ["Anna", "Will", "Daniil"];
// students.forEach((student)=>{
//     student+=" student"
//     student=student.toUpperCase();
//     console.log(student);
// })
/********************************************************************************************************************************************/
// const array = ["A", "B", "C", "D"];
// let number = 1;
// array.forEach((element, index, wholeArray)=>{
//     console.log(`Element number ${number} is ${element}, it is located in the [${wholeArray}] array, and has an index of ${index}`);
//     number++;
// })
/*Another method of solving this task*/
// function arrayManipulation(element, index, wholeArray){
//     console.log(`Element number ${number} is ${element}, it is located in the [${wholeArray}] array, and has an index of ${index}`);
//     number++;
// }
// array.forEach(arrayManipulation);
/********************************************************************************************************************************************/
// const miniTest=[12,29,11,3];
// const newArray=[];
// miniTest.forEach((number)=>{
//     if(number%3===0){
//         newArray.push(number+100);
//     }
//     else{
//         newArray.push(number)
//     }
// })
// console.log(newArray);
/*Another way to solve this task*/
// miniTest.forEach((number, index)=>{
//     if (number%3===0){
//         miniTest[index]+=100;
//     }
// })
// console.log(miniTest);
/********************************************************************************************************************************************/
// const miniTest=[12,29,11,3];
// const newArray=miniTest.map((element)=>{
//     element+=100;
//     return element;
// })
// console.log(newArray);
/********************************************************************************************************************************************/
// const donuts = ["jelly donut", "chocolate donut", "glazed donut"];
// const newDonutArray = donuts.map((element)=>{
//     element+=" hole";
//     element=element.toUpperCase();
//     return element;
// })
// console.log(newDonutArray);
/********************************************************************************************************************************************/
// const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
// const totals = bills.map((bill)=>{
//     bill*=1.15;
//     bill=bill.toFixed(2);
//     bill=Number(bill);
//     return bill;
// })
// console.log(totals);
/********************************************************************************************************************************************/
// const array=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// for (let i=0; i<array.length; i++){
//     for (let j=0; j<array[i].length; j++){
//         console.log(array[i][j])
//     }
// }
/********************************************************************************************************************************************/
// var numbers = [
//     [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
//     [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
//     [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
//     [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
//     [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
//     [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
//     [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
//     [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
//     [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
//     [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
// ];

// for (let row=0; row<numbers.length; row++){
//     for (let col=0; col<numbers[row].length; col++){
//         if (numbers[row][col]%2===0){
//             numbers[row][col]="even";            
//         }
//         else{
//             numbers[row][col]="odd"; 
//         }
//     }
// }
// console.log(numbers);
/********************************************************************************************************************************************/
// const umbrella={
//     color: "pink",
//     isOpen: false,
//     open: function(){
//         if(umbrella.isOpen===true){
//             return "The umbrella is already opened!";
//         }
//         else{
//             umbrella.isOpen = true;
//             return "Julia opens the umbrella!";
//         }
//     }
// }
// console.log(umbrella.color);
// console.log(umbrella.open());
// console.log(umbrella.isOpen);
// console.log(umbrella.open());
/********************************************************************************************************************************************/
// const umbrella={
//     color: "pink",
//     isOpen: false,
//     open: function(){
//         if(umbrella.isOpen===true){
//             return "The umbrella is already opened!";
//         }
//         else{
//             umbrella.isOpen = true;
//             return "Julia opens the umbrella!";
//         }
//     },
//     close: function(){
//         if(umbrella.isOpen===false){
//             return "The umbrella is already closed!"
//         }
//         else{
//             umbrella.isOpen=false
//             return "Julias closes the umbrella!"
//         }
//     }
// }
// console.log(umbrella.color);
// console.log(umbrella.open());
// console.log(umbrella.close());
// console.log(umbrella.isOpen);
// console.log(umbrella.close());
/********************************************************************************************************************************************/
// const sister = {
//     name: "Sarah", 
//     age: 23,
//     parents: [ "Alice", "Andy" ],
//     siblings: ["julia"],
//     favoriteColor: "purple",
//     pets: true,
//     paintPicture: function (){
//         return "Sarah paints!"
//     }
//   };
//   console.log(sister["name"]);
//   console.log(sister.parents);
//   console.log(sister.paintPicture());
/********************************************************************************************************************************************/
// const breakfast = {
//     name: "The Lumberjack",
//     price: "$9.95",
//     ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
// }
// console.log(breakfast);
/********************************************************************************************************************************************/
// const savingsAccount={
//     balance: 1000,
//     interestRatePercent: 1,
//     deposit: function addMoney(amount){
//         if(amount>0){
//             savingsAccount.balance+=amount;
//         }
//     },
//     withdraw: function removeMoney(amount){
//         if(amount>0 && savingsAccount.balance>amount){
//             savingsAccount.balance-=amount;
//         }
//     },
//     printAccountSummary: ()=>{
//         return `Welcome \nYour balance is currently $${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%`
//     }
// }
// console.log(savingsAccount.printAccountSummary())
// savingsAccount.deposit(100);
// console.log(savingsAccount.balance);
// savingsAccount.withdraw(500);
// console.log(savingsAccount.balance);
/********************************************************************************************************************************************/
// const facebookProfile={
//     name: "Emma",
//     friends: 500,
//     messages: ["Hello Bella!", "How are you doing today", "Doing great and you?"],
//     postMessage: (message)=>{
//         facebookProfile.messages.push(message);
//     },
//     deleteMessage: (index)=>{
//         facebookProfile.messages.splice(index,1);
//     },
//     addFriend: ()=>{
//         facebookProfile.friends+=1;
//     },
//     removeFriend: ()=>{
//         if(facebookProfile.friends>0){
//         facebookProfile.friends-=1;
//         }
//     }
// }
// console.log(facebookProfile.messages);
// facebookProfile.postMessage("Doing well as well! Thank you for asking :)")
// console.log(facebookProfile.messages);
// facebookProfile.deleteMessage(2);
// console.log(facebookProfile.messages);
/********************************************************************************************************************************************/
// const donuts = [
//     { type: "Jelly", cost: 1.22 },
//     { type: "Chocolate", cost: 2.45 },
//     { type: "Cider", cost: 1.59 },
//     { type: "Boston Cream", cost: 5.99 }
//   ];

// const newDonuts=[];
// donuts.forEach((donut)=>{
// console.log(`${donut.type} donuts cost $${donut.cost} each`)
// })
/********************************************************************************************************************************************/
/********************************************************************************************************************************************/
/********************************************************************************************************************************************/
/********************************************************************************************************************************************/
/********************************************************************************************************************************************/