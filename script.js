// Assignment code here
let upperCas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCas = "abcdefghijklmnopqrstuvwxyz";
let numChar = "1234567890";
let speChar = ' !"#$%&' + "()*+,-./:;<=>?@[]^_`{|}~" + "\\";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password
function generatePassword() {
  let password = "";
  let passwordString = "";
  passwordLength = prompt("Enter Number of Characters (8 - 128)");
  if (!passwordLength) {
    alert("Please choose a number in the accepted range!");
    return generatePassword();
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number in the accepted range!");
    return generatePassword();
  }
  if (passwordLength > 7 && passwordLength < 129) {
    let UpperSelect = confirm("Include upper case characters? (ok for yes)");
    if (UpperSelect == true) {
      passwordString += upperCas;
    }

    let lowerSelect = confirm("Include lower case characters? (ok for yes)");
    if (lowerSelect == true) {
      passwordString += lowerCas;
    }

    let numSelect = confirm("Include numbers? (ok for yes)");
    if (numSelect == true) {
      passwordString += numChar;
    }

    let specialSelect = confirm("Include special characters? (ok for yes)");
    if (specialSelect == true) {
      passwordString += speChar;
    }

    if (passwordString == "") {
      alert("Please choose at least one character type to continue");
      return generatePassword();
    }
  }
  //choose characters from pool at random and return into string at wanted length
  for (i = 0; i < passwordLength; i++) {
    password +=
      passwordString[Math.floor(Math.random() * passwordString.length)];
  }

  return password;
}
