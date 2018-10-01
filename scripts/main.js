var myHeading = document.querySelector('h1');
myHeading.textContent = 'Welcome to Joseph Colca\'s Webpage';

var myTales = document.querySelector('#Tales');

myTales.onclick = function() {
    var mySrc = myTales.getAttribute('src');
    if(mySrc === 'images/Tales%20From%20the%20Backlog%20Logo-Video3.jpg') {
      myTales.setAttribute ('src','images/Tales%20From%20the%20Backlog%20Logo-14.jpg');
    } 
    else if(mySrc === 'images/Tales%20From%20the%20Backlog%20Logo-14.jpg') {
      myTales.setAttribute ('src','images/Tales%20With%20Toddlers%20Logo%203D%206.jpg');
    }
    else {
      myTales.setAttribute ('src','images/Tales%20From%20the%20Backlog%20Logo-Video3.jpg');
    }
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to Joseph Colca\'s Webpage, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to Joseph Colca\'s Webpage, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

// retrieve the element
var element = document.getElementById("Tales");

// reset the transition by...
element.addEventListener("click", function(e) {
  e.preventDefault;
  
  // -> removing the class
  element.classList.remove("run-animation");
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // Oops! This won't work in strict mode. Thanks Felis Phasma!
  // element.offsetWidth = element.offsetWidth;
  // Do this instead:
  void element.offsetWidth;
  
  // -> and re-adding the class
  element.classList.add("run-animation");
}, false);