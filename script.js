const number = document.getElementById('input');
const result = document.getElementById('output');
const btn = document.getElementById('button');
const roman = /[mdclxvi]/i;
const arabic = /[0-9]/;

let romanNumerals = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I',
];
let arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

number.addEventListener('keyup', (number) => convertArabicToRoman(number));
btn.addEventListener('click', (romanNumerals) => convertArabicToRoman(number));

//Converts arabic to roman
function convertArabicToRoman(number) {
  result;
  number = number.value;
  console.log(number);

  if (number === '') {
    result.innerHTML = 'Please enter a number';
    return;
  }

  //Check if number is roman or arabic numeral
  if (roman.test(number) || arabic.test(number)) {
    //Check if input is arabic number
    if (arabic.test(number)) {
      console.log(arabic.test(number));

      //Check if input is a whole number
      if (!isNaN(number)) {
        if (number > 3999) {
          result.innerHTML = '<p>Please enter a number between 1 and 3999</p>';
          return;
        }
        let roman = '';

        for (var i = 0; i < arabicNumbers.length; i++) {
          while (number >= arabicNumbers[i]) {
            number -= arabicNumbers[i];
            roman += romanNumerals[i];
          }
        }
        //Render result
        result.innerHTML = roman;
        console.log(roman);
      } else {
        result.innerHTML =
          '<p>Invalid - Please enter a valid number (whole, 0-3999)</p>';
      }
    } else {
      console.log(roman.test(number));

      number = number.toUpperCase();

      console.log(number);

      let value = 0;

      console.log(form(number));

      let numberEquals = form(number).map(
        (x) => arabicNumbers[romanNumerals.indexOf(x)]
      );
      console.log(numberEquals);

      for (i = 0; i < numberEquals.length; i++) {
        if (numberEquals[i] < numberEquals[i + 1]) {
          result.innerHTML =
            '<p>Invalid - Please enter a valid number (whole, 0-3999)</p>';
          return;
        }

        let vArray = [5, 50, 500];

        if (
          vArray.includes(numberEquals[i]) &&
          numberEquals[i] === numberEquals[i + 1]
        ) {
          result.innerHTML =
            "<p>Invalid - Please enter a valid number (There's no such thing as VV etc)</p>";
          return;
        }

        if (vArray.includes(undefined)) {
          result.innerHTML = '<p>Invalid - Please enter a valid number</p>';
          return;
        }
      }
      let sum = numberEquals.reduce((a, b) => a + b, 0);
      console.log(sum);

      value += sum;

      if (isNaN(value)) {
        result.innerHTML = '<p>Invalid - Please enter a valid number</p>';
        return;
      }

      result.innerHTML = value;

      for (let i = 0; i < romanNumerals.length; i++) {
        if (number.includes(romanNumerals[i])) {
        } else {
          result.innerHTML = '<p>Invalid - Please enter a valid number</p>';
        }
      }
    }
  } else {
    result.innerHTML =
      '<p>Invalid - Please enter a valid arabic number or a roman numeral (whole, 0-3999)</p>';
  }
}
