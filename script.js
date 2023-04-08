var minimumValue = 8;
var maximumValue = 128;

var passwordLenght; 

var pswdUpperCase = false;
var pswdLowerCase = false;
var pswdNumeric = false;
var pswdSpecialCharacters = false;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "y", "z" ];
var upperCase = ["A", "B", "C", "D", "E" , "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "&", "*"];

passwordLenght = prompt ("Please Choose your Password lenght with a Minimum of 8 Characters and no more than 128 characters");
console.log(passwordLenght);

if (passwordLenght >= minimumValue && passwordLenght <= maximumValue ) {
  alert ("PASSWORD ACCEPTED")
}
else {
  alert ("PASSWORD MUST HAVE A MINIMUM OF 8 CHARACTERS AND A MAXIMUM OF 128 CHARACTERS");
  passwordLenght = prompt ("Please RE-ENTER YOUR PASSWORD LENGTH");
}

pswdLowerCase = confirm ("DO YOU WANT YOUR PASSWORD TO HAVE LOWERCASE CHARACTERS");
pswdUpperCase = confirm ("DO YOU WANT YOUR PASSWORD TO HAVE UPPERCASE CHARACTERS");
pswdNumeric = confirm ("DO YOU WANT YOUR PASSWORD TO USE NUMBER CHARACTERS");
pswdSpecialCharacters = confirm ("DO YOU WANT YOUR PASSWORD TO HAVE SPECIAL CHARACTERS")

console.log(pswdLowerCase);
console.log(pswdUpperCase);
console.log(pswdNumeric);
console.log(pswdSpecialCharacters);

if (pswdLowerCase == false && pswdUpperCase == false && pswdNumeric == false 
    && pswdSpecialCharacters == false )
{
      console.log("test");
      alert ("PASSWORD CANNOT BE GENERATED!!!  PLEASE CHOOSE ONE OF THE PASSWORD CRITERIA!");
      pswdLowerCase = confirm ("DO YOU WANT YOUR PASSWORD TO HAVE LOWERCASE CHARACTERS");
      pswdUpperCase = confirm ("DO YOU WANT YOUR PASSWORD TO HAVE UPPERCASE CHARACTERS");
      pswdNumeric = confirm ("DO YOU WANT YOUR PASSWORD TO USE NUMBER CHARACTERS");
      pswdSpecialCharacters = confirm ("DO YOU WANT YOUR PASSWORD TO HAVE SPECIAL CHARACTERS")
      console.log("confirm it's working");
}
else if (pswdLowerCase == true && pswdUpperCase == false && pswdNumeric == false 
  && pswdSpecialCharacters == false )
{
  console.log("it's working go here");
  var index = Math.floor(Math.random() * lowerCase.length);
  console.log(index);
  console.log(lowerCase [index]);

}
/*Research Forloop*/

/* pswdUpperCase = prompt ("DO YOU WANT YOUR PASSWORD TO HAVE UPPERCASE CHARACTERS"); */

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
