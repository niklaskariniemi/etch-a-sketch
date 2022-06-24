// add button when clicked prompts the user


// create grid
const cdiv = document.querySelector('.container');

for (let i = 1; i < gridsize; i++) {
    const div = document.createElement('div');
    div.style.cssText = "background:#ffebcd; height: 25px; width: 25px"; 

    // add event listeners for when hovering over grid
    div.addEventListener('mouseover', () => {
        div.style.cssText = "background: #1ecbe1";
    });
    cdiv.appendChild(div);
}