console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
};

// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return name;
};
// Remember to call the function to test
console.log("Hello,",helloName("Carl"));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber,secondNumber ) {
  // return firstNumber + secondNumber;
   return firstNumber + secondNumber;

};
console.log(addNumbers(4,6));


// 4. Function to multiply three numbers & return the result
function multiplyThree(x,y,z ){
return x*y*z;
};
console.log(multiplyThree(1,2,3));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
};
console.log("Number is positive and greater than zero:",isPositive(7));
console.log("Number is positive and greater than zero:",isPositive(0));
console.log("Number is positive and greater than zero:",isPositive(-7));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
    if(array == "") {
      return "undefined";
    } else {
      return array[array.length-1];
    }
};
console.log(getLast([44,5,7])); //example with array with values.
console.log(getLast([])); //example with empty array. 


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array) {
  let found;
      for(let i = 0; i < array.length; i++) {
        if(value == array[i]) {
          found = true;
        } 
      }
      if(found) {
        return true;
       } else {
        return false;
      }
 
  };
  console.log(find(88,[55,4,88,2]) );


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
if(letter == string[0]) {
 return true;
} else {
 return false;
}
};

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let numbers = [5,12,3,5];

function sumAll( arr ) {
  let sum = 0
  // TODO: loop to add items
  for(let i = 0; i < arr.length; i++) {
   sum+=arr[i];
  }
  return sum;
};
console.log(sumAll(numbers)); //EXAMPLE 1 WITH REGULAR LOOP.
console.log("----end of example1 for #9----");

function exampleTwo ( arr ) {
  let sum = 0;
  for(x of arr) {
  sum+= x;
  }
  return sum;
}
console.log(exampleTwo(numbers)); //EXMAPLES 2 WITH "OF" LOOP.
console.log("----end of example2 for #9----");

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let arrayNumbers = [4,2,3,6,2,1];
let takeAway = arrayNumbers.length;
let commaAway;
function myFunction(arr) {
let result = "";
for(let i = 0; i < arr.length; i++) {
  if(arr[i] > 0) {
  result += arr[i] + ","; 
 
} else {
  result += [];
  takeAway -=1;
}
commaAway = result.slice(0,result.length-1);
}
 

return commaAway + " : Total length(numbers) is now " + takeAway;
}; //THOUGHT THE "takeAway" VARIABLE WOULD BE A COOL TOOL TO ADD HERE. 
// I ALSO NEEDED TO DELETE THE LAST COMMA, HENCE THE "commaAway" VARIABLE. 

console.log(myFunction(arrayNumbers));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
