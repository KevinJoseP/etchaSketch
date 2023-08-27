let colourIt = false;

let lColor = "#000000"
let lbgColor = "#FFFFFF"
let eraseMode = false;
let NumberOfRows = 50;
function utilAddEventListenersToCont()
{

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseup', (e) => {
        colourIt = false;
    }));
    cells.forEach(cell => cell.addEventListener('mousedown', (e) => {
        colourIt = true;
    }));
    cells.forEach(cell => cell.addEventListener('click', markCellonClick));
    cells.forEach(cell => cell.addEventListener('mouseover', markCell));
}


function createGrid(num)
{
    const sect = document.getElementById("main-section");
    const lContDiv = document.querySelector(".container");
    console.log(lContDiv);
    if (lContDiv)lContDiv.remove();
    const contDiv = document.createElement("div");
    contDiv.classList.add("container");

    for(let i = 0; i < num; i++)
    {
        const row = document.createElement("div");
        row.classList.add("cell-row");
        for(let j = 0; j < num; j++)
        {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            let dim = 700/num;
            cell.style.height = dim.toString() + "px";
            cell.style.width = dim.toString() + "px";
            cell.style.backgroundColor = lbgColor;
            row.appendChild(cell);
        }
        contDiv.appendChild(row);
    }
    sect.appendChild(contDiv);

    utilAddEventListenersToCont();
}


function markCell (e)
{
    if (colourIt)this.style.backgroundColor = lColor;
}

function markCellonClick (e)
{
    this.style.backgroundColor = lColor;
}

createGrid(NumberOfRows);
const clear = document.querySelector('.clear-selection');
clear.addEventListener('click', e => createGrid(NumberOfRows));

const penColor = document.querySelector('#penColor');
penColor.addEventListener('input', e => {
    if(!eraseMode)lColor = penColor.value;
});

const bgColor = document.querySelector('#bgColor');
bgColor.addEventListener('input', e => {
    lbgColor = bgColor.value;
    if (eraseMode)lColor = lbgColor;
    createGrid(NumberOfRows);
});

const eraserMode = document.querySelector('#check');
eraserMode.addEventListener('input', e => {
    if(eraserMode.checked)
    {
        lColor = lbgColor;
        eraseMode = true;
    }
    else
    {
        const pen = document.querySelector('#penColor');
        lColor = pen.value;
        eraseMode = false;

    }
    console.log(lColor);
});

const slider = document.querySelector('#slider');
slider.addEventListener('input', e => {
    NumberOfRows =  slider.value;
    createGrid(NumberOfRows);
})