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
const laugh = function(num){
    let string="";
    for(let i=0; i<num; i++){
        string+="ha"
    }
    return string + "!";
}
console.log(laugh(0));
/********************************************************************************************************************************************/
/********************************************************************************************************************************************/
/********************************************************************************************************************************************/
/********************************************************************************************************************************************/
/********************************************************************************************************************************************/
/********************************************************************************************************************************************/
/********************************************************************************************************************************************/
