const container = document.querySelector("#container");

for(let i = 0 ; i < 256 ; i ++) {
    let div = document.createElement("div");
    div.setAttribute("id", `div${i+1}`);
    container.appendChild(div);
}
