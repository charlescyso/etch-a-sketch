// Create a square div and add class of squareDiv to it
let square = document.createElement('div');
square.classList.add('squareDiv');

// Declare our grid variable
let grid = document.querySelector('.grid');

// Declare userInput default to 16
let userInput = '16';
let userInputInt = parseInt(userInput);

// Clone and append multiple square div to grid by cloning
for (i = 0; i < userInputInt ** 2; i++) {
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
        e.target.style.background = '#79B478';
    }
}





// Declare grid adjust button
let gridBtn = document.getElementById('gridBtn');

// Declare userInput with user inputted grid size 
gridBtn.addEventListener('click', getUserInput);

// Get userInput
function getUserInput() {
    let userInputTest = prompt('Please choose a number between 1 and 100');
    if (userInputTest >= 1 && userInputTest <= 100) {
        userInput = userInputTest;
        changeGridSize();
    } else if (userInputTest == null || userInputTest == '') {
        alert('Cancelled');
    } else {
        alert('Invalid');
        getUserInput();
    }
}

// Function change grid size to userInput
function changeGridSize() {
    // Parse userInput as integer
    userInputInt = parseInt(userInput);
    // Delete previous child nodes
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };
    // Change grid size based on userInput
    grid.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
    // Add square div to grid
    for (i = 0; i < userInputInt ** 2; i++) {
        grid.appendChild(square.cloneNode(true));
    };
    // Declare node list of square div
    squares = document.querySelectorAll('.squareDiv');
    // Add event listeners depending whether rainbow mode is enabled or not
    if (rainbowModeCheck == 0) {
        squares.forEach(squareItem => squareItem.addEventListener('mousemove', changeColor));
        squares.forEach(squareItem => squareItem.addEventListener('mousedown', changeColor));
        squares.forEach(squareItem => squareItem.removeEventListener('mousemove', rainbowMode));
        squares.forEach(squareItem => squareItem.removeEventListener('mousedown', rainbowMode));
        rainbowModeCheck = 0;
    } else {
        squares.forEach(squareItem => squareItem.removeEventListener('mousemove', changeColor));
        squares.forEach(squareItem => squareItem.removeEventListener('mousedown', changeColor));
        squares.forEach(squareItem => squareItem.addEventListener('mousemove', rainbowMode));
        squares.forEach(squareItem => squareItem.addEventListener('mousedown', rainbowMode));
        rainbowModeCheck = 1;
    }
}


// Declare rainbow button variable
let rainbowBtn = document.getElementById('rainbowBtn');

// Add event listeners for rainbow button toggle
rainbowBtn.addEventListener('click', enableRainbowMode)
rainbowBtn.addEventListener('click', toggleActiveMode)

// Checks whether rainbow mode is enabled or disabled
let rainbowModeCheck = 0;

// Function enables and disabled rainbow mode when button is pressed
function enableRainbowMode() {
    if (rainbowModeCheck == 0) {
        squares.forEach(squareItem => squareItem.removeEventListener('mousemove', changeColor));
        squares.forEach(squareItem => squareItem.removeEventListener('mousedown', changeColor));
        squares.forEach(squareItem => squareItem.addEventListener('mousemove', rainbowMode));
        squares.forEach(squareItem => squareItem.addEventListener('mousedown', rainbowMode));
        rainbowModeCheck = 1;
        console.log('Rainbow mode enabled')
    } else {
        squares.forEach(squareItem => squareItem.addEventListener('mousemove', changeColor));
        squares.forEach(squareItem => squareItem.addEventListener('mousedown', changeColor));
        squares.forEach(squareItem => squareItem.removeEventListener('mousemove', rainbowMode));
        squares.forEach(squareItem => squareItem.removeEventListener('mousedown', rainbowMode));
        rainbowModeCheck = 0;
        console.log('Rainbow mode disabled');
    }
}

// Changes cursor to random color
function rainbowMode(e) {
    if (e.buttons == 1) {
        e.target.style.background = getRandomColor();
    }
}

// Random color picker
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Toggle active mode with css
function toggleActiveMode(e) {
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
    } else {
        e.target.classList.add('active');
    }
}



// Add clear button
let clearBtn = document.getElementById('clearBtn');

// Add click event listener to clear button
clearBtn.addEventListener('click', clearGrid)

// Function to clear grid
function clearGrid() {
    squares.forEach(squareItem => squareItem.style.background = 'rgb(245, 233, 213)')
}