// Create a square div and add class of squareDiv to it
let square = document.createElement('div');
square.classList.add('squareDiv');

// Declare our grid variable
let grid = document.querySelector('.grid');

// Clone and append multiple square div to grid by cloning
for (i = 0; i < 256; i++) {
    grid.appendChild(square.cloneNode(true));
};

// Declare node list of square div
let squares = document.querySelectorAll('.squareDiv');

// Add event listener for mousemove and mouseDown event on all square div
squares.forEach(squareItem => squareItem.addEventListener('mousemove', changeColor));
squares.forEach(squareItem => squareItem.addEventListener('mousedown', changeColor));

// Function to change color only if mouse button is pressed down
function changeColor(e) {
    if (e.buttons == 1) {
    e.target.style.background = 'white';
}};

// Declare grid adjust button
let gridBtn = document.getElementById('gridBtn');

// Declare userInput with user inputted grid size 
gridBtn.addEventListener('click', () => userInput = prompt('How big, daddy?'));