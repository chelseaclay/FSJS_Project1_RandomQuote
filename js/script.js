var displayQuote = [];
var nums = [];

function getRandomNum () {
  //generate a random number
  var randomNum =  Math.floor(Math.random() * 5);

  //if all number have been used
  if (nums.indexOf(0) > -1 &&
      nums.indexOf(1) > -1 &&
      nums.indexOf(2) > -1 &&
      nums.indexOf(3) > -1 &&
      nums.indexOf(4) > -1) {
    //empty array
    nums = [];
  }

  //if the number has not been used
  if (nums.indexOf(randomNum) === -1) {
    //add number to nums array so it wont be repeated
    nums.push(randomNum);
    return randomNum;

    //if the number has been used
  } else if (nums.indexOf(randomNum) !== -1){
    //keep generating a new number until it has not been used before
    while (nums.indexOf(randomNum) !== -1) {
      randomNum =  Math.floor(Math.random() * 5);
    }
    //add number to nums array so it wont be repeated
    nums.push(randomNum);
    return randomNum;
  }
}

function getRandomQuote () {
  //empty the displayQuote that shows the current quote on screen
  displayQuote = [];

  //call a random number to get index of quote to use
  var arrayIndex = getRandomNum();

  //pull infomation from quotes array using random number stored in arrayIndex to store in global variables
    displayQuote.push(quotes[arrayIndex].quote);
    displayQuote.push(quotes[arrayIndex].source);
    displayQuote.push(quotes[arrayIndex].style);
    displayQuote.push(quotes[arrayIndex].year);
  return displayQuote;
}

function getRandomColor () {
  //generate 3 random numbers between 0 and 256 separated by a comma to make a RGB value
  var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ','
										 + (Math.floor(Math.random() * 256)) + ','
										 + (Math.floor(Math.random() * 256)) + ')';
	return color;
}

function printQuote () {
  getRandomQuote();
  var print = '<p class="quote"> ' + displayQuote[0] + ' </p>';
      print += '<p class="source">' + displayQuote[1];
        print += '<span class="citation">' + displayQuote[2] + '</span>';
        print += '<span class="year">' + displayQuote[3] + '</span>';
      print += '</p>'

    //put the information on the page
    document.getElementById('quote-box').innerHTML = print;

    //select the body tag and pass getRandomColor funtion to style property
    document.querySelector('body').style.backgroundColor = getRandomColor();
    }


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//simulate a button click on load to get the first quote generated
window.onload = function () {
  document.getElementById('loadQuote').click();
};

//Change quote every 5 seconds
window.setInterval(function () {
  document.getElementById('loadQuote').click();
}, 5000);
