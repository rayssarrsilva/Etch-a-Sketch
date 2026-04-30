const div = document.createElement("div");
div.className = "div-square";
const container = document.querySelector(".div-container");

const a = 16;

for (let i = 0; i < (a * a); i++){
    let rows = document.createElement("div");
    container.appendChild(rows);
    rows.setAttribute("style", `flex-grow: 0; box-sizing: border-box; flex-basis: calc(100% / ${a}); border: 1px solid black; aspect-ratio: 1 / 1;`);

    rows.addEventListener("mouseover", () => {
        rows.style.backgroundColor = "pink";
    })
}

