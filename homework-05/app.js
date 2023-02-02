function getNumbers(number) {
    if (number < 0) {
      return number.toString().length - 1;
    }
    return number.toString().length;
  }
  
  console.log(getNumbers(46432));
  
  
  function oddOrEven(number) {
    if (number % 2 === 0) {
      console.log(`The number ${number} is even.`);
    } else {
      console.log(`The number ${number} is odd.`);
    }
  }
  
  oddOrEven(44);
  oddOrEven(11);
  
  
  function positiveOrNegative(number) {
    if (number > 0) {
      console.log(`The number ${number} is a positive number.`);
    } else if (number < 0) {
      console.log(`The number ${number} is a negative number.`);
    } else {
      console.log(`The number is zero`);
    }
  }
  
  positiveOrNegative(44);
  positiveOrNegative(-3);
  
  
  function allThreeFunctions(number) {
    console.log(getNumbers(number));
    oddOrEven(number);
    positiveOrNegative(number);
  }
  
  allThreeFunctions(3125);