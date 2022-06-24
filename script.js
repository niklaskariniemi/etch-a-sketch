// function that creates 16x16 grid
function grid(){
    const cdiv = document.querySelector('.container');

    for (let i = 1; i < 257; i++) {
        const div = document.createElement('div');
        div.style.cssText = "border: 1px solid black; background:#ffebcd; height: 25px; width: 25px";  
        cdiv.appendChild(div);
    }
}

grid()