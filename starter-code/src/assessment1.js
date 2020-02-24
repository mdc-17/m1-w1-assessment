// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  let resto = 0;
  if (num % 2 == resto) {
    return true;
  } else 
    return false;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else if (b < 0 && b < a) {
  return b;
} else 
  return a;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > b && c > a) {
  return c;
} else 
  return a; 
}


// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sumTotal = 0;
  for (i = 0; i < numbers.length; i++) {
    sumTotal += numbers[i];
  }
  return sumTotal;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let newArray = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > newArray) {
      newArray = numbers[i];
    }
  }
  return newArray;
}

// Return the longest string in an array
function longestString(strings) {
  let longestWord = "";
    for (i = 0; i < strings.length; i++) {
      if (strings[i].length > longestWord.length) {
        longestWord = strings[i];
      }
    }
    return longestWord;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) {
      return true;
    }
  }
  return false;
}
  

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  let arrayFinal = [];
  if (wordsArr[0] == "") {
    return false;
  }
   for (let i = 0; i < wordsArr.length; i++) {
     if (arrayFinal.indexOf(wordsArr[i]) < 0) {
       arrayFinal.push(wordsArr[i]);
     }
   }
   return arrayFinal;
 }
// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let newArray = matrix.flat();
  let newNewArray = 0;
  for (i = 0; i < newArray.length; i++) {
    if (newArray[i] > newNewArray) {
      newNewArray = newArray[i];
    }
  }
  return newNewArray;
}