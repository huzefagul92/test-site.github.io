/*

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

alert('hello!');

let myHeading = document.querySelector('h1');
     myHeading.textContent = 'Hello world!';

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}



document.write(multiply(4, 7), "</br>");
document.write(multiply(20, 20), "</br>");
document.write(multiply(0.5, 3), "</br>");

*/
 
/* Adding an image changer */

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/car.jpeg') {
      myImage.setAttribute ('src','images/car2.jpeg');
    } else {
      myImage.setAttribute ('src','images/car.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


/* Adding a personalized welcome message */
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}



