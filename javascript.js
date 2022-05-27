// Declare square divs and add squareDiv to class
let square = document.createElement('div')
square.classList.add('squareDiv');

// Declare our grid
let grid = document.querySelector('.grid')

// Create multiple square divs by cloning
for (i = 0; i < 256; i++) {
    grid.appendChild(square.cloneNode(true))
}