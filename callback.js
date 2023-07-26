// Task 1 : 
function stringRevers (str){
    const inputValue = str.split("")
    let reversValue = []
    for(let z = inputValue.length -1 ; z >= 0 ; z--){
        const revers = inputValue[z]
        reversValue.push(revers)
    }

    return reversValue.join('')
}

const reversResult =  stringRevers("Hello world")

// Task 2 : 
 
const input = [2, -5, 10, -3, 7]
function positiveValueSum(value){
    const positiveValue = value.filter((num) => num > 0  )
    const sum = positiveValue.reduce((total , value)=> total + value ,0)
    return sum 
}

const positiveSum = positiveValueSum(input)


// Task 5: 

function calculator(num1 , num2 , operator){
    if(operator === "+"){
        return num1 + num2
    }else if(operator === "-"){
        return num1 - num2
    }else if(operator === "*"){
        return num1 * num2
    }else if(operator === "/"){
        return  num1 / num2
    }
    return "Your Input value invalid"
}



// Task 8: 


const points = [40, 100, 1, 5, 25, 10];
const  descendingSort = points.sort(function(a, b){return b - a});
const secondHistValue = descendingSort[1]


// Task 6: 

function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    let password = '';
    password += getRandomCharacterFrom(uppercaseLetters);
    password += getRandomCharacterFrom(lowercaseLetters);
    password += getRandomCharacterFrom(numbers);
    password += getRandomCharacterFrom(specialCharacters);
    for (let i = 0; i < length - 4; i++) {
      password += getRandomCharacterFrom(allCharacters);
    }
    password = shuffleString(password);
    return password;
  }
  
  function getRandomCharacterFrom(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }
  
  function shuffleString(str) {
    let arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
  }
  

  const passwordLength = 12;
  const randomPassword = generateRandomPassword(passwordLength);

//   Task 4: 

  function twoSumSortedArray(nums, target) {
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  }

  const inputArray = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const result = twoSumSortedArray(inputArray, targetValue);


//   Task 7: 
  function romanToInteger(roman) {
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentChar = roman[i];
      const currentValue = romanNumerals[currentChar];
      const nextChar = roman[i + 1];
      const nextValue = romanNumerals[nextChar];
  
      if (nextValue > currentValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
    }
  
    return result;
  }
  


  








