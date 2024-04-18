var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName);



var mobileModel = prompt("Enter your favorite mobile phone model");
var length = mobileModel.length;
document.write("My favorite phone is: " + mobileModel + "<br>");
document.write("Length of string: " + length + "<br>");



var string = "Pakistani";
var index;
for (let i = 0; i < string.length; i++) {
  const char = string[i];
  if (char === "n") {
    index = i;
    break;
  }
}
document.write("String: " + string + "<br>");



var string = "Hello World";
var indices = [];
for (let i = 0; i < string.length; i++) {
  const char = string[i];
  if (char === "l") {
    indices.push(i);
  }
}
document.write(`String: ${string}`, "<br>");
document.write(`Last Index of 'l': ${indices.pop()}`, "<br>");



var string = "Pakistani";
var char = string[3];
document.write(`String: ${string}`, "<br>");
document.write(`Character at index 3: ${char}`, "<br>");



var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(" ", lastName);
alert("Hello " + fullName);



var city = "Hyderabad";
document.write(`City: ${city}`, "<br>");
document.write(`After replacement: ${city.replace("Hyder", "Islam")}`, "<br>");



var message =
  "Ali and Sami are best friends. They play cricket and football together.";

var newMessage;

for (let i = 0; i < message.length; i++) {
  const charsToCheck = message.slice(i, i + 2);
  if (charsToCheck === "and") {
    newMessage = message.slice(0, i) + "&" + message.slice(i + 2);
    break;
  }
}
document.write(`Original message: ${message}`, "<br>");
document.write(`New message: ${newMessage}`, "<br>");



var value = "472";
document.write(`Value: ${value}`, "<br>");
document.write(`Type: ${typeof value}`, "<br>");
document.write(`Value: ${parseInt(value)}`, "<br>");
document.write(`Type: ${typeof parseInt(value)}`, "<br>");



var input = prompt("Enter any word");
document.write(`User input: ${input}`, "<br>");
document.write(`Upper case: ${input.toUpperCase()}`, "<br>");


var input = prompt("Enter any word", "abd");
document.write(`User input: ${input}`, "<br>");
document.write(
  `Title case: ${input[0].toUpperCase()}${input.slice(1).toLowerCase()}`,
  "<br>"
);



var num = 35.36;
var str = num.toString();
var formatted = str.replace(".", "");
document.write(`Number: ${num}`, "<br>");
document.write(`Result: ${formatted}`, "<br>");



var username = prompt("Enter your username");
var isValid = true;
for (let i = 0; i < username.length; i++) {
  const char = username[i];
  if (char === "@" || char === "." || char === "," || char === "!") {
    isValid = false;
    break;
  }
}
if (!isValid) {
  alert("Please enter a valid username");
}



var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var search = prompt(
  "Welcome to ABC Bakery. What do you want to order sir/ma'am?"
);
var isFound = false;
for (let i = 0; i < A.length; i++) {
  const item = A[i];
  if (item.toLowerCase() === search.toLowerCase()) {
    isFound = true;
    document.write(
      `${search} is available at index ${i} in our bakery`,
      "<br>"
    );
    break;
  }
}
if (!isFound) {
  document.write(
    `We are sorry. ${search} is not available in our bakery`,
    "<br>"
  );
}

// Question 15

var password = prompt("Enter your password");
var isValid = true;
var hasNumber = false;
var hasLetter = false;
var length = password.length;
if (length < 6) {
  isValid = false;
}
if (!isNaN(password[0])) {
  isValid = false;
}
for (let i = 0; i < password.length; i++) {
  const char = password[i];
  if (!isNaN(char)) {
    hasNumber = true;
  } else {
    hasLetter = true;
  }
}
if (!hasLetter || !hasNumber) {
  isValid = false;
}
if (!isValid) {
  alert("Please enter a valid password");
}



var university = "University of Karachi";
var parts = university.split("");
for (let i = 0; i < parts.length; i++) {
  const part = parts[i];
  document.write(`${part}<br>`);
}



var input = prompt("Enter any word");
document.write(`User input: ${input}`, "<br>");
document.write(`Last character of input: ${input[input.length - 1]}`, "<br>");



var text = "The quick brown fox jumps over the lazy dog";
var count = 0;
for (let i = 0; i < text.length; i++) {
  const charsToCheck = text.slice(i, i + 3);
  if (charsToCheck.toLowerCase() === "the") {
    count++;
  }
}
document.write(`Text: ${text}`, "<br>");
document.write(`There are ${count} occurrence(s) of word 'the'`, "<br>");