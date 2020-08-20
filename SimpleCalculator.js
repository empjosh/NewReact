//So this is a simple one to just create a default calculator.
//Hopefully, I will integrate it with some of the react I have learnt so far
//to see how it goes. Alright here goes.

//What's needed?
//First a way to take numbers from the person, do the necessary operations and
//log the results to the console.

let wants = prompt('Do you want to calculate something? Input Y/N');
let num1;
let num2;
let num3;
let arr = [];

if (wants == 'Y' || 'y') {
  num1 = prompt('Enter your first below');
  arr.push(num1);
  num2 = prompt('Enter your second number');
  arr.push(num2);
  let more = prompt('You want to add more numbers? Input Y/N');
  if (more == 'Y' || 'y') {
    num3 = prompt('Enter your number');
    arr.push(num3);
  } else if (more == 'N' || n) {
    alert('Okay');
  }
} else if (wants == 'N' || 'n') {
  alert('Alright, have a nice day');
}

let opr = prompt('What sort of operation will you like to do? input (+ - * /)');
