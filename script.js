  // Password options
  const alpha = /[abcdefghijklmnopqrstuvwxyz]/;
  const uppers = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
  const incNumbers = /[0123456789]/;
  const incSymbols = /[!@#$%^&*_+=]/;

const generatePassword = () => {

  let charSet = "";

  var pwLength = prompt("How many characters would you like your password to be? (Choose a number between 8-128.)");
    while (pwLength < 8 || pwLength > 128) {
      alert("Sorry, please choose a number between 8-128.");
      pwLength = prompt("How many characters would you like your password to be? (Choose a number between 8-128.)")
    }
  
    var lowerCase = confirm("Would you like to include lowercase letters?")
    var upperCase = confirm("Would you like to include uppercase letters?")
    var num = confirm("Would you like to include numbers?")
    var symbols = confirm("Would you like to include special characters?")

    if(!lowerCase && !upperCase && !num && !symbols) {
      alert("You did not choose any options! No password can be generated.")
      return "";
    }
 
    if(lowerCase) {
      charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if(upperCase) {
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(num) {
      charSet += "0123456789";
    }
    if(symbols) {
      charSet += "!@#$%^&*_+=";
    }

    var password = "";
    
    for(let i = 0; i <= pwLength; i++) {
      let randomNum = Math.floor(Math.random() * charSet.length);
      password += charSet.substring(randomNum, randomNum + 1);
    }

    return password;
}

let passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;
    }

generateBtn.addEventListener("click", writePassword);





