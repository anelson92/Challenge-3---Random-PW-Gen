
// Password options
var alpha = "abcdefghijklmnopqrstuvwxyz";
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var incNumbers = "0123456789";
var incSymbols = "!@#$%^&*_-+=";

var length = document.getElementById("length");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");
var generateBtn = document.getElementById("generate");
var passwordTxt = document.getElementById("password");
var alphaUpper = document.getElementById("uppercase");

// write password based off above
const generatePassword = () => {
 
  let password = "";
  let chars = "";
  
  for (let i = 0; i < length; i++) {
    let randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);

  }

  return password;
};

generateBtn.addEventListener("click", () => {

  let characters = alpha;
  alphaUpper.checked ? (characters += uppers) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword();
  
});


