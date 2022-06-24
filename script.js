// initialize variables
let gridSize = 256;

// initialize grid
grid( gridSize );

// function creates grid
function grid( gridSize ){
    const cdiv = document.querySelector( '.container-grid' );

    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        div.style.cssText = "height: 25px; width: 25px"; 

        // add event listeners for when hovering over grid
        div.addEventListener('mouseover', () => {
            div.style.cssText = "background: #1ecbe1";
        });
        cdiv.appendChild(div);
    }
}

// button when clicked prompts the user
const btn = document.querySelector( '.size-button' );
btn.addEventListener('click', () => {
    gridSize = prompt( "Enter grid size" );
    gridSize = gridSize * gridSize;
    grid( gridSize );
});