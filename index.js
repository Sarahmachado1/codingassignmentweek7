console.log("1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. Programmatically subtract the value of the first element in the array from the value in the last element of the array. Do not use numbers to reference the last element, find it programmatically. ages[7] - ages[0] is not allowed! Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths). Use a loop to iterate through the array and calculate the average age.");

var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);
//displyed the arrry

var findLastNumber = ages.length - 1;
var result = ages[findLastNumber] - ages[0];
console.log(result);
//how to subtract the first element and last element

ages.push(75);
console.log(ages);
//add an element to the end

var findLastNumber = ages.length - 1;
var result = ages[findLastNumber] - ages[0];
console.log(result);
//redid the code to make sure it works with the added number

var totalSum = 0 
for(let i = 0; i < ages.length; i++) {
    totalSum += ages[i];
}
var average = totalSum / ages.length;
console.log(average);
//the average age of all the ages

console.log('2. Create an array called names that contains the following values: Sam, Tommy, Tim, Sally, Buck, Bob');

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);
//displayed the array
console.log('A. Use a loop to iterate through the array and calculate the average number of letters per name.');

let totalLetters = 0;
let numberOfNames = names.length;
for (let i = 0; i < numberOfNames; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / numberOfNames;
console.log(averageLetters);
//showing how to find the avaerge letters for the total of names

console.log('B. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.');

let concatenatedNames = ' ';
for (let i = 0; i < names.length; i++) {
concatenatedNames += names[i];
if(i < names.length){
    concatenatedNames += ' ';
}
}
console.log(concatenatedNames);

//cancatenated the names together with spaces

console.log('3. How do you access the last element of any array?');
console.log('console.log(myArray[myArray.length - 1]);');
//displaying how to print the last element of an array

console.log('4. How do you access the first element of any array?');
console.log('console.log(myArray[0]);');
//displaying how to print the first element of array. 0 beacuse it starts at 0 insted of 1

console.log('5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.');

var nameLengths = [3, 5, 3, 5, 4, 3];
for (let i = 0; i < nameLengths.length; i++) {
    console.log(nameLengths[i]);
  }
//it really just displaying all the numbers of letters in each name

console.log('6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.');

let sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
} console.log(sum);
//the sum of all the letter in each name

console.log('7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in Hello and 3, I would expect the function to return HelloHelloHello).');

let manyWords = (word, n) => {
    let result = '';
    for (let i = 0; i < n; i++){
      result += word;
    }
    return result;
};
console.log(manyWords('donut', 5));
//printed donut 5 times

console.log('8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.');

let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(createFullName('Sarah', 'Machado'));
//displayed my full name

console.log('9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.');
//var numberedArray = [54, 23, 41];

//let totalAmount = 0;
//for(let i = 0; numberedArray.length; i++) {
    //totalAmount += numberedArray[i];
    //if(totalAmount > 100) {
        //return "true";
    //}
//}

//console.log(totalAmount(numberedArray));

//the code above is not working and when i try to run it is give me an 
//error on there return statement and i dont understand why becaue i beliveve it is correct

console.log('10. Write a function that takes an array of numbers and returns the average of all the elements in the array.');

var kidsAges = [6, 5, 8, 5, 10];
var totalOfAges = 0 
for(let i = 0; i < kidsAges.length; i++) {
    totalOfAges += kidsAges[i];
}
var averageAge = totalOfAges / kidsAges.length;
console.log(averageAge);
//this displays the average age of all the kids

console.log('11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.');

var testScoresA = [80, 90, 69, 78, 70, 85];
var testScoresB = [80, 70, 65, 68, 70, 60];

var testScoresATotal = 0
var testScoresBTotal = 0

for(let i = 0; i < testScoresA.length; i++) {
    testScoresATotal += testScoresA[i];
} var avgTestA = testScoresATotal / testScoresA.length;

for(let i = 0; i < testScoresB.length; i++) {
    testScoresBTotal += testScoresB[i];
} var avgTestB = testScoresBTotal / testScoresB.length;

function testResults(){
 if(avgTestA > avgTestB) {
        console.log('true');
    }
}
testResults();
//this is a very convoluted way of displaying true if a is greater than b 

console.log('12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.');

var isHotOutside = true;
var moneyInPocket = 11;

function willBuyDrink(){
    if(isHotOutside == true && moneyInPocket > 10.50){
        console.log(true);
}
}
willBuyDrink();
//if both elements are true then it displays true

console.log('13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.');



function tooMuchCoffee (cupsOfCoffee) {
    if(cupsOfCoffee > 3) {
        console.log('THATS TOO MUCH COFFEE! NO MORE!');
} else if (cupsOfCoffee < 3) {
    console.log('ok maybe 1 more cup.');
}
}
console.log(tooMuchCoffee(2));
console.log(tooMuchCoffee(4));
//i created a function that tells me if ive had too many cups of coffee