console.log('This is separate JS file');

// Option 1 Directly set on the html
{/* <button onclick="console.log(7);">Click ME</button> */ }

 // Option 2:  Body Red
// Important: we will use this
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// Option 3:  Color Blue
const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// Option 3: Another
const yellowButton = document.getElementById('make-yellow');
yellowButton.onclick = function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

// Option 4:
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// Option 4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})

 // Final
// Important: we will use this

//    document.getElementById('make-goldenrod').addEventListener('click', function(){})
  document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
}) 