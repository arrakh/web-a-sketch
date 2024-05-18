var colorPicker = document.getElementById("color-picker");

let mouseDown = false;

function draw(element){
    element.style.backgroundColor = colorPicker.value;
}

function onMouseOverElement(element){
    if (mouseDown) draw(element);
}

function createGridElement(x, y) {

    let div = document.createElement("div");

    div.style.backgroundColor = "white";
    div.draggable = false;

    div.onmouseover = () => onMouseOverElement(div);
    div.onmousedown = () => draw(div);
    
    return div;
}

function createGrid(container, columnCount, rowCount){
    let panel = document.createElement("div");

    panel.classList.add("grid-panel");

    panel.draggable = false;

    panel.style.display = "grid";

    panel.style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`;
    panel.style.gridTemplateRows = `repeat(${rowCount}, 1fr)`;

    for (let x = 0; x < columnCount; x++) {
        for (let y = 0; y < rowCount; y++) {
            let element = createGridElement(x, y);
            panel.appendChild(element);
        }
    }

    container.appendChild(panel);
    return panel;
}

var panel = document.getElementById("panel");
panel.draggable = false;

let grid = createGrid(panel, 32, 32);

/* window.addEventListener("mousedown", (event)=> mouseDown = true);
window.addEventListener("mouseup", (event)=> mouseDown = false); */

window.addEventListener("mousemove", (event) => mouseDown = event.buttons === 1);