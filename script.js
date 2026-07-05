const container = document.querySelector("#container");

for(let i = 0 ; i < 256 ; i ++) {
    let div = document.createElement("div");
    div.setAttribute("id", `div${i+1}`);
    div.classList.add("square");
    container.appendChild(div);
}

const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("mouseenter", () => square.style.backgroundColor = "red");
})