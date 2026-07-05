const container = document.querySelector("#container");
const gridButton = document.querySelector("#grid-btn");





gridButton.addEventListener("click", () => {
    removeOldGrid();
    let gridSize = Number(prompt("Enter number of squares per one side of the grid:"));
    if (gridSize > 100) {
        console.log("You cannot choose number greater than 100. Please try again.");
    } else {
        generateGrid(gridSize);
        const squares = document.querySelectorAll(".square");
        squares.forEach(square => {
            square.addEventListener("mouseenter", () => square.style.backgroundColor = "red");
        })
    }

})

function generateGrid(gridSize) {
    for (let i = 0; i < gridSize ** 2; i++) {
        let div = document.createElement("div");
        div.setAttribute("id", `div${i + 1}`);
        div.classList.add("square");
        div.style.width = `calc((800px / ${gridSize}) - 2px)`
        div.style.height = div.style.width;
        container.appendChild(div);
    }
}

function removeOldGrid() {
    if (document.querySelectorAll(".square")) {
        const squares = document.querySelectorAll(".square");
        squares.forEach(square => {
            container.removeChild(square);
            console.log("child removed");
        })
    }
}

