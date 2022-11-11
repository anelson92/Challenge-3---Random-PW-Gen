
// Get references to the #generate element
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.querySelector("generate");
const passwordTxt = document.getElementById("password");

generateBtn.addEventListener("click", () => {
let characters = alpha;
incNumbers.checked ? (characters += numbers) : "";
incSymbols.checked ? (characters += symbols) : "";
passwordTxt.value = generatePassword(length, characters);
});

const generatePassword = (length, characters) => {
let password = "";
for (let i = 0; i < length; i++) {
  password += characters.charAt(
    Math.floor(Math.random() * characters.length)
  );
}
return password;
};