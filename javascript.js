const div = document.createElement("div");
div.className = "div-square";
const container = document.querySelector(".div-container");


for (let i = 0; i < (16 * 16); i++){
    let rows = document.createElement("div");
    container.appendChild(rows);
    rows.setAttribute("style", "flex-grow: 0; box-sizing: border-box; flex-basis: calc(100% / 16); aspect-ratio: 1 / 1; border: 1px solid black;");
}