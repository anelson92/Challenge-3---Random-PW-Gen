const generateBtn = document.querySelector("#generate");

const generatePassword = () => {

  // Password options
  const alpha = /[abcdefghijklmnopqrstuvwxyz]/;
  const uppers = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
  const incNumbers = /[0123456789]/;
  const incSymbols = /[!@#$%^&*_+=]/;
 
  var pwLength = prompt('How many characters would you like your password to be? \n(Choose a number between 8-128.)');
    while (pwLength < 8 || pwLength > 128) {
      alert('Sorry, please choose a number between 8-128.');
      pwLength = prompt('How many characters would you like your password to be? (Choose a number between 8-128.)');
    }
  
    var lowerCase = confirm('Would you like to include lowercase letters?')
    var upperCase = confirm('Would you like to include uppercase letters?')
    var num = confirm('Would you like to include numbers?')
    var symbols = confirm('Would you like to include special characters?')

    if(!alpha && !upper && !num && !symbols) {
      alert('You did not choose any options! No password can be generated.')
      return '';
    }

    let charSet = '';
   
    if(lowerCase) {
      charSet += 'abcdefghijklmnopqrstuvwxyz';
    }
    if(upperCase) {
      charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(num) {
      charSet += '0123456789';
    }
    if(symbols) {
      charSet += '!@#$%^&*_+=';
    }

    var password = '';
    for (var i = 0; i < password.length; i++) {
      password += charSet.charAt(Math.floor(Math.random() * charSet.length))
    }
    return password; 

    var generateBtn = document.querySelector('#generate');

    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector('#password');

      passwordText.value = password;
    }
};

generateBtn.addEventListener("click", generatePassword);



