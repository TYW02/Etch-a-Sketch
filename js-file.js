const container = document.querySelector("#container");
container.setAttribute("style", "display:flex; flex-wrap: wrap; width: 100vw; height: 100vh");

// RUNNING DEFAULT GRID
defaultGrid();
colorEffect();


// User defined code
let size = 0;
const sizeButton = document.querySelector("#sizeInput");
const clearButton = document.querySelector("#clearBtn");
clearButton.addEventListener("click", () => {
    clearColor();
});
sizeButton.addEventListener("click", () => {
    getUserSize();
    removeGrid();
    createUserGrid();
    colorEffect();
});

function getUserSize(){
    size = prompt("Enter size of grid.");
    if(size == "" || size >= 100){
        alert("You must enter a number < 100.");
        size = 16;
    }
}

function removeGrid() {
    while(container.firstChild){
        container.firstChild.remove();
    }

}

function createUserGrid(){
    const cellSize = 100 / size;
    for(let i = 0; i < (size*size); i++){
        const div = document.createElement("div");
        div.setAttribute("style", "border: solid 1px black; width: " + cellSize + "%; height:" + cellSize + "%; box-sizing: border-box");
        container.appendChild(div);
    };
}

function defaultGrid(){
    //Create 256 div
    for(let i = 0; i < 256; i++){
        const div = document.createElement("div");
        div.setAttribute("style", "border: solid 1px black; width: 6.25%; height:6.25%; box-sizing: border-box");
        container.appendChild(div);
    };    
}


function colorEffect() {
    let allDiv = container.querySelectorAll("div");
    allDiv.forEach((div) => {
        div.addEventListener("mouseenter", (e) => {
            div.style.backgroundColor = "pink";
        })
    })
}

function clearColor() {
    let allDiv = container.querySelectorAll("div");
    allDiv.forEach((div) => {
        div.style.backgroundColor = "";
    })
}
