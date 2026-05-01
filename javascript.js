const div = document.createElement("div");
div.className = "div-square";
const container = document.querySelector(".div-container");

function createSquare(size = 16){
    for (let i = 0; i < (size * size); i++){
        let rows = document.createElement("div");
        container.appendChild(rows);
        rows.setAttribute("style", `flex-grow: 0; box-sizing: border-box; flex-basis: calc(100% / ${size}); border: 1px solid black; aspect-ratio: 1 / 1;`);
        hoverSquare(rows);
    }
}

const ChangeSize = document.querySelector(".popup");

function callButton(){
    ChangeSize.addEventListener("click", function() {
        let promp = prompt("Type the number of squares per side for the new grid (Y x Y): "); 
        if (promp <= 100 && promp) {
            container.textContent = "";
            createSquare(Number(promp));
        } else {
            alert("Insert a value under 100");
        }
    });
}

function hoverSquare(rows){
    rows.addEventListener("mouseenter", () => {
        rows.style.backgroundColor = 'blue';
    })
}

createSquare();
callButton();