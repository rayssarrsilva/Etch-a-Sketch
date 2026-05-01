const div = document.createElement("div");
div.className = "div-square";
const container = document.querySelector(".div-container");

const a = 16;

function generateSquare(size){
    if (!size){
        for (let i = 0; i < (a * a); i++){
            let rows = document.createElement("div");
            container.appendChild(rows);
            rows.setAttribute("style", `flex-grow: 0; box-sizing: border-box; flex-basis: calc(100% / ${a}); border: 1px solid black; aspect-ratio: 1 / 1;`);
        }
    } else {
        for (let i = 0; i < (size * size); i++){
            let rows = document.createElement("div");
            container.appendChild(rows);
            rows.setAttribute("style", `flex-grow: 0; box-sizing: border-box; flex-basis: calc(100% / ${size}); border: 1px solid black; aspect-ratio: 1 / 1;`);
        }
    }
}

generateSquare();

function sizeNumber(){
    let promp = prompt("Type the number of squares per side for the new grid (Y x Y): ");
}
