//MODULE ASSIGNMENT 2 - LEVEL 1

//1. Create a function that displays prototypal inheritance

function Cheese() {
    this.brand = "Tine"
}

Cheese.prototype.name= function() {
    console.log("I love cheese from " + this.brand)
}
    
var norwegia = new Cheese();
norwegia.name();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(numbers.slice(4,5));

//3. Delete the last number in the array that you created above.

console.log (numbers.pop());

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
//Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var myArray = ["Liverpool","Manchester City","Arenal","Leicester City"];
document.getElementById("question5").innerHTML = myArray;

function removeElements() {
  myArray.splice(0, myArray.length, "Toyota","Mercedes","Tesla","Golf");
  document.getElementById("question5").innerHTML = myArray;
  console.log(myArray);
  };

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var myFamily = [
  {name: "Tara", age: "14", hobby: "drawing"},
  {name: "Keya", age: "2" , hobby: "playing with dolls"},
  {name: "Raghu", age: "42", hobby: "cricket"},
]

var favourite = myFamily.filter(function(person){
  return (person.name === "Tara");
})

console.log(favourite);

//7. Create a simple function that logs the date.

var todaysDate = new Date(),
  day = todaysDate.getDate(),
  month = todaysDate.getMonth() +1,
  year = todaysDate.getFullYear();
  
console.log(day +"/" + month + "/" + year);